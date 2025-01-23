const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config')

exports.verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
  
    const token = authHeader.split(' ')[1];
  
    try {
      const payload = jwt.verify(token, jwtSecret);
      req.userId = payload.id;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };