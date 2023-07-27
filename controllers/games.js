import GameData from "../models/games.js";

export const getAllGames = async (req, res) => {
  try {
    const GameData = await GameData.find();
    res.status(200).json(GameData);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const createGame = async (req, res) => {
  const games = req.body;
  const newgames = new gamesData(games);
  try {
    await newgames.save();
    res.status(201).json(newgames);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
