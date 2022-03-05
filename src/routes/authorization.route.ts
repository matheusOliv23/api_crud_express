import { NextFunction, Request, Response, Router } from "express";
import ForbiddenError from "../Models/errors/forbidden-error.model";
import userRepository from "../repositorios/user.repository";

const authorizationRoute = Router();

authorizationRoute.post(
  "/token",
  async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const authorizationHeader = req.headers["authorization"];
      if (!authorizationHeader) {
        throw new ForbiddenError("Erro ao autenticar");
      }

      const [authenticationType, token] = authorizationHeader.split(" ");

      // Basic = admin:admin

      if (authenticationType !== "Basic" || !token) {
        throw new ForbiddenError("Tipo de autenticação inválido.");
      }

      const tokenContent = Buffer.from(token, "base64").toString("utf-8");

      const [username, password] = tokenContent.split(":");

      if (!username || !password) {
        throw new ForbiddenError("É necessário preencher todos os campos.");
      }

      const user = await userRepository.findByUserAndPassword(
        username,
        password
      );
      console.log(user);
    } catch (error) {
      next(error);
    }
  }
);

export default authorizationRoute;
