import Device from "../models/Device.js";
import Log from "../models/Log.js";

export const getDashboardStats = async (req, res) => {

  try {

    const { email } = req.query;

    const deviceCount =
      await Device.countDocuments({
        email
      });

    const loginCount =
      await Log.countDocuments({
        email
      });

    const lastLogin =
      await Log.findOne({
        email
      }).sort({
        createdAt: -1
      });

    res.json({
      deviceCount,
      loginCount,
      lastLogin:
        lastLogin?.createdAt || null
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};