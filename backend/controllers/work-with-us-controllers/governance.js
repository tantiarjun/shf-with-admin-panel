import governance from "../../models/work-with-us/governance.js";

// controllers for uploading image url to mongodb
export const uploadGovernanceImage = async (req, res) => {
  const fileUrl = req.file.location;

  try {
    const file = new governance({ ImageUrl: fileUrl });
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
export const getGovernanceImageUrl = async (req, res) => {
  try {
    const imageUrl = await governance.find({});
    res.json(imageUrl);
  } catch (error) {
    res.json({ message: error.message });
  }
};
