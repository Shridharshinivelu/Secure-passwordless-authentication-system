import Device from "../models/Device.js";

export const saveDevice = async (req, res) => {

  try {

    const {
      email,
      deviceName,
      browser
    } = req.body;

    const device = new Device({

      email,

      deviceName,

      browser,

      lastLogin: new Date()

    });

    await device.save();

    res.json({
      message: "Device Saved Successfully"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

export const getDevices = async (req, res) => {

  try {

    const devices =
      await Device.find()
      .sort({
        createdAt: -1
      });

    res.json(devices);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};