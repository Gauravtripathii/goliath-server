import express from "express";

import { getAllUsers, createUser, getUser } from "../controllers/user.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUser);

export default router;
