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

    const createdUser = await userService.save(receivedUser);

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

export const findByName = async (req,res) => {
  try {

    const name = req.params.name;

    const userService = new UserService();

    const usersFound = await userService.findByName(name);

    res.status(200).json(usersFound);

  } catch (err){
    res.status(400).json({
      message: err.message,
    });
  }
}

export const findById = async (req,res) => {
  try {

    const user_id = req.params.user_id;

    const userService = new UserService();

    const userFound = await userService.findById(user_id);

    res.status(200).json(userFound);

  } catch (err){
    res.status(400).json({
      message: err.message,
    });
  }
}

export const findMyOwnEvents = async (req,res)=>{
  try {
    const { user_id } = req.params;

    const userService = new UserService();
    
    const events = await userService.findMyOwnEvents(user_id);

    res.status(200).json(events);

    
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
}

export const findEventsRegistered = async (req,res)=>{
  try {
      const {user_id} = req.params;

      const userService = new UserService();

      const events = await userService.findEventsRegistered(user_id);

      res.status(200).json(events);

  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
}