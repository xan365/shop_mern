import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../contollers/userController.js";

const router = express.Router();

router.post("/login", authUser);
router.route("/profile").get(getUserProfile);
router.route("/").post(registerUser);

export default router;
