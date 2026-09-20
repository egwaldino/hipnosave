import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { env } from "./config/env.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { router } from "./routes/index.js";

const app = express();

app.use(
  cors({
    origin: env.webOrigins,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.get("/health", (_req, res) => res.json({ ok: true }));
app.use("/", router);

app.use(errorHandler);

app.listen(env.port, () => {
  console.log(`API a correr em http://localhost:${env.port}`);
});
