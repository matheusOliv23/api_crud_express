import { NextFunction, Request, Response, Router } from "express";
import ForbiddenError from "../Models/errors/forbidden-error.model";
import JWT from "jsonwebtoken";
import basicAuthenticationMidleware from "../middlewares/basic.authentication.middleware";
import bearerAuthentication from "../middlewares/jwt-authentication.middleware";

const authorizationRoute = Router();

authorizationRoute.post(
  "/token",
  basicAuthenticationMidleware,
  (req: Request, resp: Response, next: NextFunction) => {
    try {
      const user = req.user;

      if (!user) {
        throw new ForbiddenError("Usuário não informado.");
      }
      const jwtPayload = { username: user.username };
      const jwtSecretKey = "my_secret_key";
      const jwtOptions = { subject: user?.uuid, expiresIn: "10m" };

      const jwt = JWT.sign(jwtPayload, jwtSecretKey, jwtOptions);
      resp.status(200).send(jwt).json({ token: jwt });
    } catch (error) {
      next(error);
    }
  }
);

authorizationRoute.post(
  "/token/validate",
  bearerAuthentication,
  (req: Request, resp: Response, next: NextFunction) => {
    resp.sendStatus(200);
  }
);

export default authorizationRoute;
