import UserService from '../services/user.service.js';

export const save = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userService = new UserService();

    const receivedUser = {
      name,
      email,
      password,
    }

    const createdUser = userService.save(receivedUser);

    res.status(201).json(createdUser);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export const list = async (req,res) => {
  try {
    const userService = new UserService();

    const users = await userService.list();

    res.status(200).json(users)

  } catch (err){
    res.status(400).json({
      message: err.message,
    });
  }
}

export const update = async (req,res) => {
  try {
    const { name, email, password } = req.body;

    const receivedUser = {
      name,
      email,
      password,
    }

    const userService = new UserService();

    const updatedUser = await userService.update(receivedUser);

    res.status(200).json(updatedUser)

  } catch (err){
    res.status(400).json({
      message: err.message,
    });
  }
}