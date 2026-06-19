import Log from "../models/Log.js";

export const saveLog = async (req, res) => {

  try {

    const {
      email,
      action,
      ipAddress
    } = req.body;

    const log = new Log({

      email,

      action,

      ipAddress

    });

    await log.save();

    res.json({
      message: "Log Saved Successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: error.message
    });

  }

};

export const getLogs = async (req, res) => {

  try {

    const logs =
      await Log.find()
      .sort({
        createdAt: -1
      });

    res.json(logs);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};