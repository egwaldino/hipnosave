import type { CreateAvailabilitySlotInput } from "@hipnosave/shared";
import { prisma } from "../config/prisma.js";
import { HttpError } from "../middlewares/error-handler.js";

export function listOpenSlots(fromDate: string) {
  return prisma.availabilitySlot.findMany({
    where: { isBooked: false, date: { gte: fromDate } },
    orderBy: [{ date: "asc" }, { startTime: "asc" }],
  });
}

export function listAllSlots(fromDate: string) {
  return prisma.availabilitySlot.findMany({
    where: { date: { gte: fromDate } },
    orderBy: [{ date: "asc" }, { startTime: "asc" }],
    include: { appointment: true },
  });
}

export async function createSlot(input: CreateAvailabilitySlotInput) {
  try {
    return await prisma.availabilitySlot.create({ data: input });
  } catch (error) {
    if (typeof error === "object" && error && "code" in error && error.code === "P2002") {
      throw new HttpError(409, "Já existe um horário igual a esse");
    }
    throw error;
  }
}

export async function deleteSlot(slotId: string) {
  const slot = await prisma.availabilitySlot.findUnique({ where: { id: slotId } });
  if (!slot) throw new HttpError(404, "Horário não encontrado");
  if (slot.isBooked) throw new HttpError(409, "Não é possível remover um horário já reservado");

  await prisma.availabilitySlot.delete({ where: { id: slotId } });
}
