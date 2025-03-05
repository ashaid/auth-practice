import "reflect-metadata";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";
import authRoutes from "./routes/authRoutes";
import { authMiddleware } from "./middleware/auth";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);

// Protected route example
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route" });
});

// Connect to database and start server
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
