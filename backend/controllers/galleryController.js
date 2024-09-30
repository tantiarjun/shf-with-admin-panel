import gallery from "../models/gallery.js";

export const uploadImageUrlToDB = async (req, res, next) => {
  const { eventType } = req.body;

  try {
    const data = {
      eventType,
      imageUrl: req.file.location,
    };

    const imageData = new gallery(data);
    await imageData.save();

    res.status(201).json({
      message: "image save to s3 and url saved to DB",
      data: imageData,
    });
  } catch (error) {
    next(error);
  }
};

export const getGalleryImageUrl = async (req, res, next) => {
  try {
    const gallerydata = await gallery.find();
    res.json(gallerydata);
  } catch (error) {
    next(error);
  }
};
