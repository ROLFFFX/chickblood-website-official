import express from "express";
import mongoose from "mongoose";
import { mongoDBURL } from "./config/mongoConfig.js";
import cors from "cors";
import emailRoutes from "./routes/emailRoutes.js";
import bodyParser from "body-parser";

const app = express();

// Middlewares:  for parsing application/json
app.use(express.json());
app.use(cors());


app.get("/", (request, response) => {
  return response.status(234).send("Welcome to chickblood server!");
});

// email routes
app.use(bodyParser.json());
app.use("/api", emailRoutes);

// Connect to MongoDB
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("MongoDB connected.");
    app.listen(PORT, () => console.log(`Server running on port ${PORT} now.`));
  })
  .catch((err) => console.log(err));

// Listening to the server
const PORT = 3001;
