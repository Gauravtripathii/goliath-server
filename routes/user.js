import express from "express";

import { getAllUsers, createUser, getUser, deleteUser } from "../controllers/user.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);

export default router;
