import { Router } from "express";
import {
  createAppointmentHandler,
  listAppointmentsHandler,
  updateAppointmentStatusHandler,
} from "../controllers/appointment.controller.js";
import { requireOwner } from "../middlewares/auth.middleware.js";

export const appointmentRouter = Router();

appointmentRouter.get("/", requireOwner, listAppointmentsHandler);
appointmentRouter.post("/", createAppointmentHandler);
appointmentRouter.patch("/:appointmentId/status", requireOwner, updateAppointmentStatusHandler);
