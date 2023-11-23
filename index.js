import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./database/connectDB.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost"],
  })
);

const port = process.env.PORT;

// Middleware to parse JSON requests
app.use(bodyParser.json());

//connected to database
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
