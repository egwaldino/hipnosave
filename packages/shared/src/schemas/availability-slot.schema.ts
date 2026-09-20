import { z } from "zod";

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

const availabilitySlotBaseSchema = z.object({
  date: z.string().date("Data inválida"),
  startTime: z.string().regex(timeRegex, "Hora inválida (HH:MM)"),
  endTime: z.string().regex(timeRegex, "Hora inválida (HH:MM)"),
});

const startBeforeEnd = (slot: { startTime: string; endTime: string }) => slot.startTime < slot.endTime;

export const createAvailabilitySlotSchema = availabilitySlotBaseSchema.refine(startBeforeEnd, {
  message: "A hora de início deve ser anterior à hora de fim",
  path: ["endTime"],
});

export type CreateAvailabilitySlotInput = z.infer<typeof createAvailabilitySlotSchema>;

export const availabilitySlotSchema = availabilitySlotBaseSchema.extend({
  id: z.string(),
  isBooked: z.boolean(),
});

export type AvailabilitySlot = z.infer<typeof availabilitySlotSchema>;
