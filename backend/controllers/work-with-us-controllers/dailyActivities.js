import dailyActivities from "../../models/work-with-us/dailyActivities.js";

// controllers for adding daily Activites
export const addDailyActivites = async (req, res, next) => {
  try {
    await dailyActivities.create(req.body);
    res.status(201).json({
      success: true,
      message: "Data Send Successfully",
    });
  } catch (error) {
    next(error);
  }
};

// controllers for getting daily activities
export const getDailyActivities = async (req, res, next) => {
  try {
    const activity = await dailyActivities.find();
    res.json(activity);
  } catch (error) {
    next(error);
  }
};
