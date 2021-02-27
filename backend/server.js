import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import productsRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productsRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
