import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import { authMiddleware } from "./middleware/auth";
import { AuthRequest } from "./types/express";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Protected route example
app.get("/api/teams", authMiddleware, (req: AuthRequest, res) => {
  // Your team members data
  const teamMembers = [
    // Your team data here
  ];
  res.json({ teamMembers });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
