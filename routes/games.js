import express from "express";

import { getAllGames, createGame, getGame, deleteGame, updateGame } from "../controllers/games.js";

const router = express.Router();

router.get("/", getAllGames);
router.post("/", createGame);
router.get("/:id", getGame);
router.delete("/:id", deleteGame);
router.patch("/:id", updateGame);


export default router;
