import { Router } from "express";
import {
  createSlotHandler,
  deleteSlotHandler,
  listAllSlotsHandler,
  listOpenSlotsHandler,
} from "../controllers/availability.controller.js";
import { requireOwner } from "../middlewares/auth.middleware.js";

export const availabilityRouter = Router();

availabilityRouter.get("/", listOpenSlotsHandler);
availabilityRouter.get("/all", requireOwner, listAllSlotsHandler);
availabilityRouter.post("/", requireOwner, createSlotHandler);
availabilityRouter.delete("/:slotId", requireOwner, deleteSlotHandler);
