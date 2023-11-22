import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./database/connectDB.js";

const app = express();
const port = 8000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello, this is your Express.js and MongoDB backend!");
});

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
