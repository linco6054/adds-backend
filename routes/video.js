import express from "express";
import {
  createANewVideo,
  getAllVideos,
  getVideoById,
  updateVideoById,
} from "../controllers/video.js";

const router = express.Router();

router.get("/", getAllVideos);
router.post("/", createANewVideo);
router.post("/:id", getVideoById);
router.patch("/:id", updateVideoById);
export default router;
