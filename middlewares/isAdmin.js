module.exports = () => {
  return (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403);
    }
    next();
  };
};
