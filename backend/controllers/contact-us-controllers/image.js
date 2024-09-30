import { contactusImage } from "../../models/contact-us-model/image.js";

// controllers for uploading image url to mongodb
const uploadImage = async (req, res) => {
  const fileUrl = req.file.location;

  try {
    const file = new contactusImage({ url: fileUrl });
    await file.save();
    res
      .status(201)
      .send("File uploaded and URL saved to MongoDB successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error uploading file and saving URL.");
  }
};

// controllers for getting image url
const getContactusImageUrl = async (req, res) => {
  try {
    const imageUrl = await contactusImage.find({});
    res.json(imageUrl);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export { uploadImage, getContactusImageUrl };
