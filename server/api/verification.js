const User = require("../db/models/User");

const adminVerification = async (req, res, next) => {
  try {
    console.log(req);
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    console.log("ello", user);
    if (!user) {
      throw new Error("Not Authorized");
    }

    if (user.userType === "ADMIN") {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const userVerification = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);

    if (user.userType === "admin") {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { adminVerification, userVerification };
