import { Request, Response, NextFunction } from "express";
import { HttpStatusCode } from "axios";
import { CustomError } from "@/utils/errors/custom";
import SecurityManager from "@/utils/helpers/security-manager";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    throw new CustomError(HttpStatusCode.Unauthorized, "No token provided");
  if (!authHeader.startsWith("Bearer "))
    throw new CustomError(HttpStatusCode.Unauthorized, "Invalid token format");

  const token = authHeader.split(" ")[1];
  const decoded = SecurityManager.verifyToken(token);
  if (!decoded)
    throw new CustomError(HttpStatusCode.Unauthorized, "Invalid token");

  // Attach user to request
  (req as any).user = decoded;
  next();
};
