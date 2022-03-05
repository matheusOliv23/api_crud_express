import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-code";
import userRepository from "../repositorios/user.repository";

const usersRoute = Router();

usersRoute.get(
  "/users",
  async (req: Request, resp: Response, next: NextFunction) => {
    const users = await userRepository.findAllUsers();
    resp.status(200).json(users);
  }
);

usersRoute.get(
  "/users/:uuid",
  async (
    req: Request<{ uuid: string }>,
    resp: Response,
    next: NextFunction
  ) => {
    const uuid = req.params.uuid;
    const user = await userRepository.findById(uuid);
    resp.status(200).send(user);
  }
);

usersRoute.post(
  "/users",
  async (req: Request, resp: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await userRepository.create(newUser);

    resp.status(205).send(uuid);
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
