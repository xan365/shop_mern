import jwt from "jsonwebtoken";

const generaToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d", // 30天token过期
  });
};

export default generaToken;
