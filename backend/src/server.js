import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;

/* Middlewares */
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());

/* CORS configuration */
app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  })
);

/* API Routes */
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

/* Production setup */
if (ENV.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");

  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

/* Start server */
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  connectDB();
});