// controllers/authController.js
const jwt = require('jsonwebtoken');

exports.loginAdmin = async (req, res) => {
  // Authentication logic to validate user credentials
  // If credentials are valid, generate JWT token and return it
  
  const user = { id: 1, username: 'example', role: 'admin' }; // Example user

  jwt.sign({ user }, 'Sx|4ev)E=W5&Dpy{bf}NXvhv1T97Ex?Z"w@L1Im}!yIhW,~J!yaHYww:;8AGmFu', { expiresIn: '1h' }, (err, token) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(200).json({ token });
    }
  });
};


exports.loginUser = async (req, res) => {
  // Authentication logic to validate user credentials
  // If credentials are valid, generate JWT token and return it
  
  const user = { id: 2, username: 'user', role: 'user' }; // Example regular user

  jwt.sign({ user }, 'your_secret_key_here', { expiresIn: '1h' }, (err, token) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(200).json({ token });
    }
  });
};