import UserService from '../services/user.service.js';

export const save = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new UserService();

    const createdUser = user.save({
      name,
      email,
      password,
    });

    res.status(201).json(createdUser);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
