const ROLES = require("../models/roles");
module.exports = () => {
  return (req, res, next) => {
    if (req.user.role !== ROLES[1]) {
      return res.status(403);
    }
    next();
  };
};