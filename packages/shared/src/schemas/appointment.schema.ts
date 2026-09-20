import { z } from "zod";

export const appointmentStatusSchema = z.enum(["pending", "confirmed", "cancelled"]);

export type AppointmentStatus = z.infer<typeof appointmentStatusSchema>;

export const createAppointmentSchema = z.object({
  slotId: z.string().min(1, "Selecione um horário"),
  patientName: z.string().min(2, "Introduza o seu nome"),
  patientPhone: z.string().min(9, "Introduza um número de telefone válido"),
  patientEmail: z.string().email("Email inválido").optional().or(z.literal("")),
  reason: z.string().max(500).optional(),
});

export type CreateAppointmentInput = z.infer<typeof createAppointmentSchema>;

export const appointmentSchema = createAppointmentSchema.extend({
  id: z.string(),
  status: appointmentStatusSchema,
  notes: z.string().optional(),
  createdAt: z.string(),
  slot: z.object({
    id: z.string(),
    date: z.string(),
    startTime: z.string(),
    endTime: z.string(),
  }),
});

export type Appointment = z.infer<typeof appointmentSchema>;
