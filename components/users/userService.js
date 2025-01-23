const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/config')
const { verifyEmail, createUser } = require('./userRepository');

exports.signup = async (name, email, password) => {
  const existingUser = await verifyEmail(email);
  if (existingUser) {
    throw new Error('Ya existe un usuario con este email');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await createUser({ name, email, password: hashedPassword });
  return newUser;
};

exports.signin = async (email, password) => {
  const user = await verifyEmail(email);
  if (!user) {
    throw new Error('El usuario no existe');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('El usuario o la contraseña son incorrectos');
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    jwtSecret,
    { expiresIn: '1h' }
  );

  return { ...user.toJSON(), token };
};
