import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  doodId: { type: String, required: true, unique: true },
  year: { type: Number, required: true },
  description: { type: String },
  posterLink: { type: String },
  thumbnail: { type: String },
});

const VIDEO = mongoose.model("Video", videoSchema);

export default VIDEO;
