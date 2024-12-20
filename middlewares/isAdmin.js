module.exports = () => {
  return (req, res, next) => {
    const roles = 'admin';
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Accès refusé' });
    }
    next();
  };
};
