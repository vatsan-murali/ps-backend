const express = require("express");
const router = express.Router()
const User = require("../models/userSchema");


// Sign Up
router.post("/register", async (req, res) => {
  const { username, email, password, cpassword } = req.body;
  const role = "user";
  if (!username || !password || !email || !cpassword) {
    return res.status(422).json({ error: "Fill out credentials" });
  }

  try {
    const userCheck = await User.findOne({ email: email });
    if (userCheck) {
      return res.status(422).json({ error: "User already exists" });
    }

    const user = new User({ username, email, password, cpassword, role });
    if (password !== cpassword) {
      return res
        .status(422)
        .json({ error: "Please make sure your passwords match" });
    }

    await user.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

// Login
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(422).json({ error: "Fill out credentials" });
  }

  try {
    const userCheck = await User.findOne({
      username: username,
      password: password,
    });
    
    if (userCheck) {
      if(userCheck.role == "admin")
        return res.status(201).json({ message: "Logged in successfully!", role: userCheck.role});
      else if(userCheck.role == "user")
        return res.status(201).json({ message: "Logged in successfully!", role: userCheck.role});
    } else {
      return res.status(422).json({ error: "User does not exist!"});
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
