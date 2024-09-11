import express from "express";

import authRouter from "./auth.routes";
import userRouter from "./user.routes";
import groceryRouter from "./grocery.routes";
import orderRouter from "./order.routes";

const router = express();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/grocery", groceryRouter);
router.use("/order", orderRouter);

export default router;
