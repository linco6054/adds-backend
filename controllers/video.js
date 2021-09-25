import VIDEO from "../models/videos.js";

//================================================================= get all video
export const getAllVideos = async (req, res) => {
  try {
    const videos = await VIDEO.find();
    res.status(200).json({
      results: videos,
      message: "videos retreived successfully",
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
//================================================================= end of get videos

//================================================================== create a new video
export const createANewVideo = async (req, res) => {
  const { doodId } = req.body;
  const existingVideo = await VIDEO.findOne({
    doodId: doodId,
  });

  if (existingVideo)
    return res.json({ message: "video with that id already exist" });
  try {
    const video = new VIDEO(req.body);
    const createdVideo = await video.save();
    res
      .staus(201)
      .json({ message: "created successfully", results: createdVideo });
  } catch (error) {
    res.status(424).json({ message: error.message });
  }
};
//================================================================== create a new video

//================================================================== get video by id
export const getVideoById = async (req, res) => {
  const id = req.params;
  try {
    const video = await VIDEO.findById(id);
    res
      .status(200)
      .json({ message: "video retreived successfully", results: video });
  } catch (error) {}
};
//================================================================== end of get video by id

//================================================================== start update video by id
export const updateVideoById = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const updatedUser = await VIDEO.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res
      .status(201)
      .json({ message: "video updated successfullu", results: updatedUser });
  } catch (error) {
    res.status(424).json({ message: error.message });
  }
};
//================================================================== end update video by id
