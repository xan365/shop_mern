import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // 有token
  if (
    token.header.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await await User.findById(decoded.id).select("-password"); // 把password去掉

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  // 没有token
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
