import { Router } from "express";
import { appointmentRouter } from "./appointment.routes.js";
import { authRouter } from "./auth.routes.js";
import { availabilityRouter } from "./availability.routes.js";

export const router = Router();

router.use("/auth", authRouter);
router.use("/availability", availabilityRouter);
router.use("/appointments", appointmentRouter);
