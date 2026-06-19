import User from "../models/User.js";
import { generateToken }
from "../services/tokenService.js";

export const register =
async (req,res)=>{

  try{

    const {
      name,
      email
    } = req.body;

    const existingUser =
      await User.findOne({
        email
      });

    if(existingUser){

      return res.status(400)
      .json({
        message:
        "User already exists"
      });
    }

    const user =
      await User.create({
        name,
        email
      });

    const token =
      generateToken(
        user._id
      );

    res.status(201)
    .json({
      user,
      token
    });

  }catch(error){

    res.status(500)
    .json({
      error:error.message
    });
  }
};