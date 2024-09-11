import express from "express";

import {
  createGrocery,
  getGroceries,
  updateGrocery,
  deleteGrocery,
} from "../controller/grocery.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";

const router = express();

router.post("/add", authenticate, authorize("admin"), createGrocery);
router.get("/", authenticate, getGroceries);
router.put("/update/:id", authenticate, authorize("admin"), updateGrocery);
router.delete("/delete/:id", authenticate, authorize("admin"), deleteGrocery);

export default router;
