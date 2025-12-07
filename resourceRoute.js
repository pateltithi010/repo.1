import express from "express";
import {
  addResource,
  getAllResources,
  getResource,
  updateResource,
  deleteResource,
} from "../controllers/resourceController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addResource);
router.get("/", protect, getAllResources);
router.get("/:id", protect, getResource);
router.put("/:id", protect, updateResource);
router.delete("/:id", protect, deleteResource);

export default router;  // <-- IMPORTANT
