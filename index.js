import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/user.js";
import gameRoutes from "./routes/games.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/user", userRoutes);
app.use("/game", gameRoutes);

const CONNECTION_URL =
  "mongodb+srv://golaithAdmins:golaithAdmins0@cluster0.zmupedm.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log("Connected to Goliath Database!"))
  )
  .catch((error) => console.log(error.message));


