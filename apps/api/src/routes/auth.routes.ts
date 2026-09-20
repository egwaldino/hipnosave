import { Router } from "express";
import { loginHandler, logoutHandler, meHandler } from "../controllers/auth.controller.js";
import { requireOwner } from "../middlewares/auth.middleware.js";

export const authRouter = Router();

authRouter.post("/login", loginHandler);
authRouter.post("/logout", logoutHandler);
authRouter.get("/me", requireOwner, meHandler);
