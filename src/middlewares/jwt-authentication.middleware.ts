import { NextFunction, Response, Request } from "express";
import ForbiddenError from "../Models/errors/forbidden-error.model";
import JWT from "jsonwebtoken";

async function bearerAuthentication(
  req: Request,
  resp: Response,
  next: NextFunction
) {
  try {
    const authorizationHeader = req.headers["authorization"];

    if (!authorizationHeader) {
      throw new ForbiddenError("Usuário não informado.");
    }

    const [authenticationType, token] = authorizationHeader.split(" ");

    if (authenticationType !== "Bearer" || !token) {
      throw new ForbiddenError("Tipo de autenticação inválido.");
    }

    const tokenPayload = JWT.verify(token, "my_secret_key");

    if (typeof tokenPayload !== "object" || !tokenPayload.sub) {
      throw new ForbiddenError("Token inválido");
    }

    try {
      const user = {
        uuid: tokenPayload.sub,
        username: tokenPayload.username,
      };
      req.user = user;
      next();
    } catch (error) {
      throw new ForbiddenError("Token inválido");
    }

   
  } catch (error) {
    next(error);
  }
}

export default bearerAuthentication;
