const userModel = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
  try {
      const { username, email, password, role } = req.body;

      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'Email already registered' });
      }
  
      const isValidRole = ['user', 'admin'].includes(role);
      if (!isValidRole) {
        return res.status(400).json({ message: 'Invalid role' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = new userModel({
        username,
        email,
        password: hashedPassword,
        role
      });

      await user.save();

      res.status(201).json({ message: 'User created successfully' })
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  
  exports.login = async (req, res) => {
    try {
      const { username, email, password } = req.body;

      const user = await userModel.findOne({ username, email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid username, email or password' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid username, email or password' });
      }
  
      const token = jwt.sign({ userId: user._id, role:user.role }, process.env.TOKEN_SECRET);
  
      res.status(200).json({ message: 'Successful Login', token });
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
