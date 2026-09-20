import type { NextFunction, Request, Response } from "express";
import { verifyOwnerToken, type OwnerTokenPayload } from "../utils/jwt.js";

export interface AuthenticatedRequest extends Request {
  owner?: OwnerTokenPayload;
}

export function requireOwner(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const token = req.cookies?.owner_session as string | undefined;

  if (!token) {
    return res.status(401).json({ message: "Sessão não encontrada" });
  }

  try {
    req.owner = verifyOwnerToken(token);
    next();
  } catch {
    return res.status(401).json({ message: "Sessão inválida ou expirada" });
  }
}
