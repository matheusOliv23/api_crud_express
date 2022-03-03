import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-code";

const usersRoute = Router();

usersRoute.get("/users", (req: Request, resp: Response, next: NextFunction) => {
  const users = [{ username: "Matheus" }];
  resp.status(200).json(users);
});

usersRoute.get(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, resp: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    resp.status(200).send({ uuid });
  }
);

usersRoute.post(
  "/users",
  (req: Request, resp: Response, next: NextFunction) => {
    const newUser = req.body;
    resp.status(205).send(newUser);
  }
);

usersRoute.put(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, resp: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const usuarioModificado = req.body;

    usuarioModificado.uuid = uuid;
    resp.status(200).send({ usuarioModificado });
  }
);

usersRoute.delete(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, resp: Response, next: NextFunction) => {
    resp.sendStatus(200);
  }
);

export default usersRoute;
