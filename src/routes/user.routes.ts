import express from "express";

import { createUser, getUsers } from "../controller/user.controller";

const router = express();

router.post("/signup", createUser);
router.get("/", getUsers);

export default router;
