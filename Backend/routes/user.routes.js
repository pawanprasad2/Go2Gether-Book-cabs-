const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const usercontroller = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("first name must be 3 caracters long"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("password must be 5 characters long"),
  ],
  usercontroller.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("password must be 5 characters long"),
  ],
  usercontroller.loginUser
);

router.get("/profile", authMiddleware.authUser, usercontroller.getUserProfile);

router.get("/logout", authMiddleware.authUser, usercontroller.logoutUser);

module.exports = router;
