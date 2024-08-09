import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password) {
    res.status(400).send("Email and password are required");
  }
  const user = await User.findOne({ email });
  // @ts-expect-error This exists but the condition is ignored.
  bcrypt.compare(password, user.password, (err, result) => {
    if(err) {
      res.status(500).send("An error occurred");
    }
    if(!result) {
      res.status(401).send("Invalid credentials");
    }
    const token = jwt.sign({ id: user?.id }, "secret", { expiresIn: "1h" });
    res.status(200).json({ token });
  });
});

authRouter.post("/register", (req, res) => {
  const { email, password } = req.body;
  if(!email || !password) {
    res.status(400).send("Email and password are required");
  }
  User.create({ email, password });
  res.status(200).send("User created");
});

export default authRouter;