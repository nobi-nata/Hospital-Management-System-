const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

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
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      //   .then((user) => res.json(user))
      //   .catch((err) => {
      //     console.log(err);
      //     res.json({ error: "Please enter a valid value for email" });
      //   });
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

module.exports = router;
