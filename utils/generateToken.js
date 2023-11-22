import jwt from "jsonwebtoken";
const generateToken = (res, userId) => {
  const jtok = "sdwd2342d24d32432d2";
  console.log(res, userId);
  const token = jwt.sign({ userId }, jtok, {
    expiresIn: "30d",
  });

  // Set Jwt as HTTP-Only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, //30days
  });
};

export default generateToken;
