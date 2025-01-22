const User = require('./userModel');

exports.verifyEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

exports.createUser = async (userData) => {
  return await User.create(userData);
};

