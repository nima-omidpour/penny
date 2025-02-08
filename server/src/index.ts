import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";
// import agentRoutes from "./routes/agent";
import * as dotenv from "dotenv";
import teamRoutes from "./routes/team";
dotenv.config();

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from frontend
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/agent", agentRoutes);
app.use("/api/team", teamRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Basic test route
app.get("/test", (req, res) => {
  res.json({ message: "Test route working" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
