const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "harryisagodd$boy";

router.post(
  "/createuser",
  [
    body("email", "Enter the valid Email").isEmail(),
    body("name", "Enter the valid Name").isLength({ min: 3 }),
    body("password", "Password should be of 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //if there are errors return bad requests and the errors

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check wheather the user with the email exist already
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ error: "sorry a user with this email exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      //   .then((user) => res.json(user))
      //   .catch((err) => {
      //     console.log(err);
      //     res.json({ error: "Please enter a valid value for email" });
      //   });
      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json(authtoken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Authenticating a user using :POST:"/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter the valid Email").isEmail(),
    body("password", "password cannit be blank").exists(),
  ],
  async (req, res) => {
    //if there are errors return bad requests and the errors

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare({ password: user.password });
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Plaese login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json(authtoken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
