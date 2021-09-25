import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import videoRoutes from "./routes/video.js";
import bodyParser from "body-parser";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use(morgan());

// routes for
app.use("/videos", videoRoutes);
app.get("/", (req, res) => {
  res.send(`Server Running on Port${PORT}`);
});

// connect to db
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server runnig on port http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.error(error);
  });
