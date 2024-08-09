import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if(!token) {
    res.status(401).send("No token provided");
  } else {
    jwt.verify(token, "secret", (err: any, decoded: any) => {
      if(err) {
        res.status(401).send("Invalid token");
      }
      // @ts-expect-error This exists but the condition is
      req.user = decoded;
      next();
    });
  }
};