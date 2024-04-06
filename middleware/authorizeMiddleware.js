// middleware/authorizeMiddleware.js
const authorizeAdmin = (req, res, next) => {
    const user = req.user;
  
    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }
  
    next();
  };
  
  module.exports = authorizeAdmin;
  