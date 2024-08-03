import { Router } from "express";

const router = Router();

// import all the controllers
import {login, getUser, generateOTP, verifyOTP, createResetSession, updateUser, resetPassword} from "../controllers/appController.js";

// POST method
router.route("/register").post((req, res) => {
  res.status(200).json("Register Route");
}); // register user
// router.route('/registerMail').post(); // send the mail
router.route("/authenticate").post((req, res) => res.end()); // authenticate user
router.route("/login").post(login); // login in app

// Get method
router.route("/user/:username").get(getUser); // user with username
router.route("/generateOTP").get(generateOTP); // generate random OTP
router.route("/verifyOTP").get(verifyOTP); // verify generated OTP
router.route("/createResetSection").get(createResetSession); // reset all the variables

// PUT method
router.route("/updateuser").put(updateUser); // used to update the user profile
router.route("/resetPassword").put(resetPassword); // use to reset password

export default router;
