import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateVerificationCode } from "../utils/generateVerificationCode.js";
import { generateToken } from "../utils/generateToken.js";
import { sendVerificationEmail, sendWelmcomeEmail } from "../mail/emails.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }
    const userFound = await User.findOne({ email });
    console.log(userFound);
    if (userFound) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = generateVerificationCode();
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpires: Date.now() + 3600000,
    });
    await newUser.save();

    generateToken(res, newUser._id);
    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...newUser._doc,
        password: null,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res) => {
  const { code } = req.body;

  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;
    await user.save();
    await sendWelmcomeEmail(user.email, user.name);
    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      user: {
        ...user._doc,
        password: null,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    if (!user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    generateToken(res, user._id);
    user.lastLogin = Date.now();
    await user.save();
    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        ...user._doc,
        password: null,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};
