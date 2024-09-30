import gainVisibility from "../../models/work-with-us/gainVisibility.js";

// controllers for adding gain greater visibility data
export const uploadGainVisibilityImageAndData = async (req, res, next) => {
  const { title, description } = req.body;
  if (!req.files || req.files.length < 3) {
    return res.status(400).json({ error: "Three files are requried" });
  }
  try {
    const data = {
      image1: req.files[0].location,
      image2: req.files[1].location,
      image3: req.files[2].location,
      title: title,
      description: description,
    };

    const gainVisibilityData = new gainVisibility(data);
    await gainVisibilityData.save();

    res.status(201).json({
      success: true,
      message:
        "images send to S3,  imageURl and data saved to Mongodb Successfully ",
    });
  } catch (error) {
    next(error);
  }
};

// controllers for getting data for gain greater visibility

export const getGainVisibilityImageAndData = async (req, res, next) => {
  try {
    const visibilityData = await gainVisibility.find();
    res.status(201).json(visibilityData);
  } catch (error) {
    next(error);
  }
};
