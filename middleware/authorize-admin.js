const User = require('../models/user')

const authorizeAdmin = (req, res, next) => {
  User.findById(req.userId)
    .then(user => {
      if (user.role === 'admin') {
        next();
      } else {
        res.status(403).json({ error: 'Forbidden' });
      }
    })
    .catch(() => {
      res.status(500).json({ error: 'Failed to authorize' });
    });
};

module.exports = authorizeAdmin;