import { loginSchema } from "@hipnosave/shared";
import type { Response } from "express";
import type { AuthenticatedRequest } from "../middlewares/auth.middleware.js";
import { getOwnerById, login } from "../services/auth.service.js";

const SESSION_COOKIE = "owner_session";
const SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: true,
  sameSite: "none" as const,
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export async function loginHandler(req: AuthenticatedRequest, res: Response) {
  const input = loginSchema.parse(req.body);
  const { token, owner } = await login(input);

  res.cookie(SESSION_COOKIE, token, SESSION_COOKIE_OPTIONS);
  res.json({ owner });
}

export function logoutHandler(_req: AuthenticatedRequest, res: Response) {
  res.clearCookie(SESSION_COOKIE, { httpOnly: true, secure: true, sameSite: "none" });
  res.status(204).send();
}

export async function meHandler(req: AuthenticatedRequest, res: Response) {
  const owner = await getOwnerById(req.owner!.ownerId);
  res.json({ owner });
}
