import teamImage from "../../models/work-with-us/teamImage.js";

export const uploadTeamImagesUrlToDB = async (req, res) => {
  if (!req.files || req.files.length < 3) {
    return res.status(400).json({ error: "Three files are required" });
  }

  try {
    const images = {
      mainImageUrl: req.files[0].location, // S3 URL for main image
      imageUrl1: req.files[1].location, // S3 URL for image 1
      imageUrl2: req.files[2].location, // S3 URL for image 2
    };

    const newImages = new teamImage(images);
    await newImages.save();

    res.status(201).json(newImages);
  } catch (error) {
    console.error("Error during image upload:", error);
    res.status(500).json({ error: "Server error during image upload" });
  }
};

export const getTeamImageUrl = async (req, res) => {
  try {
    const imageUrl = await teamImage.find();
    res.json(imageUrl);
  } catch (error) {
    res.json({ message: error.message });
  }
};
