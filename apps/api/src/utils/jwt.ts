import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export interface OwnerTokenPayload {
  ownerId: string;
  email: string;
}

export function signOwnerToken(payload: OwnerTokenPayload): string {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: "7d" });
}

export function verifyOwnerToken(token: string): OwnerTokenPayload {
  return jwt.verify(token, env.jwtSecret) as OwnerTokenPayload;
}
