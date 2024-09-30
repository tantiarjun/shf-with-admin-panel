import { registeredUserData } from "../../models/work-with-us/registration.js";

export const addRegistrationData = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email already exists
    const existingUser = await registeredUserData.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Create a new user if the email does not exist
    await registeredUserData.create(req.body);
    res.status(201).json({
      success: true,
      message: "Registration done successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred during registration",
      error: error.message,
    });
  }
};

export const getRegisteredUserData = async (req, res) => {
  try {
    const allRegisteredUser = await registeredUserData.find({});
    res.json(allRegisteredUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};
