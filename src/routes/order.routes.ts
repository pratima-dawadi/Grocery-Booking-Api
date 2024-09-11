import express from "express";

import {
  createMultipleOrders,
  createOrder,
  getOrders,
} from "../controller/order.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = express();

router.post("/", authenticate, createOrder);
router.post("/multiple", authenticate, createMultipleOrders);
router.get("/", authenticate, getOrders);

export default router;
