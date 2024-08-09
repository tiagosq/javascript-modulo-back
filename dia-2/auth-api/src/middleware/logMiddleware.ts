import { NextFunction, Request, Response } from "express";
import Log from "../models/Log";

export const logMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { baseUrl, method } = req;
  const token = req.headers.authorization;
  await Log.create({ token, action: `${method} ${baseUrl}` });
  next();
};