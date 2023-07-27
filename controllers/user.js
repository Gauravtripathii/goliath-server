import UserData from "../models/users.js";

export const getAllUsers = async (req, res) => {
  try {
    const userData = await UserData.find();
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserData(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const {id} = req.params;
  try {
    const userData = await UserData.findById(id);
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

export const deleteUser = async (req, res) => {
  const {id} = req.params;
  try {
    await UserData.findByIdAndRemove(id);
    res.status(200).json({message : "User Account successfully deleted."});
  } catch (error) {
    res.status(404).json({error : error.message});
  }
}
