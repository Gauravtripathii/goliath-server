import GameData from "../models/games.js";

export const getAllGames = async (req, res) => {
  try {
    const gameData = await GameData.find();
    res.status(200).json(gameData);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const createGame = async (req, res) => {
  const games = req.body;
  const newgames = new GameData(games);
  try {
    await newgames.save();
    res.status(201).json(newgames);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


export const getGame = async (req, res) => {
  const {id} = req.params;
  try {
    const gameData = await gameData.findById(id);
    res.status(200).json(gameData);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

export const deleteGame = async (req, res) => {
  const {id} = req.params;
  try {
    await GameData.findByIdAndRemove(id);
    res.status(200).json({message : "game Account successfully deleted."});
  } catch (error) {
    res.status(404).json({error : error.message});
  }
}

export const updateGame = async (req, res) => {
  const {id} = req.params;
  const { Name, genere, desc, reviews, rating, links, media, Downloads, WCount, Game } = req.body;
  const updatedgame = { Name, genere, desc, reviews, rating, links, media, Downloads, WCount, Game, _id : id };
  try {
    await GameData.findByIdAndUpdate(id, updatedgame, {new : true} );
    res.status(200).json(updatedgame);
  } catch(error) {
    res.status(404).json({error : error.message} );
  }
}
