import express from "express";
import { createUser, getUsers } from "../controller/user.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = express();

router.post("/signup", createUser);

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get users
 *     description: Retrieve a list of users with authentication.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           example: Bearer {token}
 *         description: Bearer token for authentication
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: User ID
 *                   name:
 *                     type: string
 *                     description: User name
 */

router.get("/", authenticate, getUsers);

export default router;
