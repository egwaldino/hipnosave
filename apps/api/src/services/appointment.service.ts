import type { AppointmentStatus, CreateAppointmentInput } from "@hipnosave/shared";
import { prisma } from "../config/prisma.js";
import { HttpError } from "../middlewares/error-handler.js";

export function listAppointments() {
  return prisma.appointment.findMany({
    orderBy: [{ slot: { date: "asc" } }],
    include: { slot: true },
  });
}

export async function createAppointment(input: CreateAppointmentInput) {
  return prisma.$transaction(async (tx) => {
    const slot = await tx.availabilitySlot.findUnique({ where: { id: input.slotId } });

    if (!slot) throw new HttpError(404, "Horário não encontrado");
    if (slot.isBooked) throw new HttpError(409, "Esse horário já foi reservado, escolha outro");

    await tx.availabilitySlot.update({
      where: { id: slot.id },
      data: { isBooked: true },
    });

    return tx.appointment.create({
      data: {
        slotId: slot.id,
        patientName: input.patientName,
        patientPhone: input.patientPhone,
        patientEmail: input.patientEmail || null,
        reason: input.reason,
      },
      include: { slot: true },
    });
  });
}

export async function updateAppointmentStatus(appointmentId: string, status: AppointmentStatus) {
  return prisma.$transaction(async (tx) => {
    const appointment = await tx.appointment.findUnique({ where: { id: appointmentId } });
    if (!appointment) throw new HttpError(404, "Consulta não encontrada");

    if (status === "cancelled") {
      await tx.availabilitySlot.update({
        where: { id: appointment.slotId },
        data: { isBooked: false },
      });
    }

    return tx.appointment.update({
      where: { id: appointmentId },
      data: { status },
      include: { slot: true },
    });
  });
}
