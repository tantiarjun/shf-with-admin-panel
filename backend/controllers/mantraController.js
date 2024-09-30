import Mantra from "../models/Mantra.js";

// Function to format date as "11 July, 2024"
const formatDate = (date) => {
  const days = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = days[date.getDate() - 1];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};

export const uploadMantra = async (req, res, next) => {
  const { month, textContent } = req.body;

  try {
    // Define the update operation
    const update = {
      textContent,
      photoUrl: req.file.location,
      lastModified: formatDate(new Date()),
    };

    // Find the mantra by month and update it if it exists, or insert a new one if it doesn't
    const updatedMantra = await Mantra.findOneAndUpdate({ month }, update, {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    });

    res.status(201).json({
      message:
        "Mantra for the month uploaded/updated successfully, and data saved to MongoDB.",
      data: updatedMantra,
    });
  } catch (error) {
    next(error);
  }
};

export const getMantra = async (req, res, next) => {
  try {
    const allMantra = await Mantra.find();
    res.json(allMantra);
  } catch (error) {
    next(error);
  }
};

// New endpoint to update checkbox state
export const updateCheckboxState = async (req, res, next) => {
  const { month, isChecked } = req.body;

  try {
    const updatedMantra = await Mantra.findOneAndUpdate(
      { month },
      { isChecked },
      { new: true }
    );
    res.json({
      message: "Checkbox state updated successfully.",
      data: updatedMantra,
    });
  } catch (error) {
    next(error);
  }
};
