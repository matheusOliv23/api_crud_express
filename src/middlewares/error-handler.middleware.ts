import { NextFunction, Request, Response } from "express";
import DatabaseError from "../Models/errors/database.error";
import ForbiddenError from "../Models/errors/forbidden-error.model";

function errorHandler(
  error: any,
  req: Request,
  resp: Response,
  next: NextFunction
) {
  if (error instanceof DatabaseError) {
    resp.sendStatus(400); // Bad request - informação errada do cliente
  } else if (error instanceof ForbiddenError) {
    resp.sendStatus(403); // Forbidden error
  } else {
    resp.sendStatus(500); //internal server error
  }
}

export default errorHandler;
