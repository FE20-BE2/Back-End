const authorizeAdmin = (req, res, next) => {
  try {
    if (req.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ error: 'Forbidden' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to authorize' });
  };
};

module.exports = authorizeAdmin;