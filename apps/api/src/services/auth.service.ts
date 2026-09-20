import type { LoginInput } from "@hipnosave/shared";
import { prisma } from "../config/prisma.js";
import { HttpError } from "../middlewares/error-handler.js";
import { signOwnerToken } from "../utils/jwt.js";
import { verifyPassword } from "../utils/password.js";

export async function login({ email, password }: LoginInput) {
  const owner = await prisma.ownerUser.findUnique({ where: { email } });

  if (!owner || !(await verifyPassword(password, owner.passwordHash))) {
    throw new HttpError(401, "Email ou senha incorretos");
  }

  const token = signOwnerToken({ ownerId: owner.id, email: owner.email });
  return { token, owner: { id: owner.id, email: owner.email, name: owner.name } };
}

export async function getOwnerById(ownerId: string) {
  const owner = await prisma.ownerUser.findUnique({ where: { id: ownerId } });
  if (!owner) throw new HttpError(401, "Sessão inválida");
  return { id: owner.id, email: owner.email, name: owner.name };
}
