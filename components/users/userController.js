const { signin, signup} = require('./userService');

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await signup(name, email, password);
    res.status(201).json({ message: `Usuario creado, Hola ${newUser.name}` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await signin(email, password);
    res.status(200).json({
      token: user.token,
      userId: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
