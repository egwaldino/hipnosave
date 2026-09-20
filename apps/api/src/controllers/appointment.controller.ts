import { appointmentStatusSchema, createAppointmentSchema } from "@hipnosave/shared";
import { z } from "zod";
import type { Request, Response } from "express";
import * as appointmentService from "../services/appointment.service.js";

export async function listAppointmentsHandler(_req: Request, res: Response) {
  const appointments = await appointmentService.listAppointments();
  res.json({ appointments });
}

export async function createAppointmentHandler(req: Request, res: Response) {
  const input = createAppointmentSchema.parse(req.body);
  const appointment = await appointmentService.createAppointment(input);
  res.status(201).json({ appointment });
}

const updateStatusSchema = z.object({ status: appointmentStatusSchema });

export async function updateAppointmentStatusHandler(req: Request, res: Response) {
  const { status } = updateStatusSchema.parse(req.body);
  const appointment = await appointmentService.updateAppointmentStatus(req.params.appointmentId, status);
  res.json({ appointment });
}
