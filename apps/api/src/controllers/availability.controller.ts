import { createAvailabilitySlotSchema } from "@hipnosave/shared";
import type { Request, Response } from "express";
import * as availabilityService from "../services/availability.service.js";

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export async function listOpenSlotsHandler(_req: Request, res: Response) {
  const slots = await availabilityService.listOpenSlots(todayIso());
  res.json({ slots });
}

export async function listAllSlotsHandler(_req: Request, res: Response) {
  const slots = await availabilityService.listAllSlots(todayIso());
  res.json({ slots });
}

export async function createSlotHandler(req: Request, res: Response) {
  const input = createAvailabilitySlotSchema.parse(req.body);
  const slot = await availabilityService.createSlot(input);
  res.status(201).json({ slot });
}

export async function deleteSlotHandler(req: Request, res: Response) {
  await availabilityService.deleteSlot(req.params.slotId);
  res.status(204).send();
}
