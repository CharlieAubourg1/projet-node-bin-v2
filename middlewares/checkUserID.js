const jwt = require("jsonwebtoken");
const ROLES = require("../models/roles");

module.exports = async (req, res, next) => {
  const headerValue = req.headers.authorization ?? req.headers.Authorization;
  if (!headerValue) return res.sendStatus(401);
  // Bearer jdkelzfhjezlkhfnjzle
  const [type, token] = headerValue.split(/\s+/);
  if (type !== "Bearer") return res.sendStatus(401);
  try {
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET
    );
    if (payload.id !== req.id && payload.role !== ROLES[1]) return res.status(403);
    next();
  } catch (e) {
    return res.sendStatus(401);
  }
};