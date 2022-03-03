import { NextFunction, Router, Request, Response } from "express";

const statusRoute = Router();

statusRoute.get(
  "/status",
  (req: Request, resp: Response, next: NextFunction) => {
    resp.sendStatus(200);
  }
);

export default statusRoute;
