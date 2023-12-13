import express from "express";
import { verifyJwtToken } from "../config/verify.js";
import {
  CreateProperties,
  Myproperty,
  createInventory,
  home,
  property,
} from "../controllers/controller.js";
// import {
//   CreateTask,
//   DeleteTask,
//   getTask,
//   getTasks,
//   UpdateTask,
// } from "../Controllers/Task.js";

const router = express.Router();

router.get("/", home);
router.post("/", CreateProperties);
router.get("/:id", property);
router.get("/mybusiness/:email", Myproperty);
router.post("/inventory/:id", createInventory);

// router.post("/create", verifyJwtToken, CreateTask);
// router.put("/:id", verifyJwtToken, UpdateTask);
// router.get("/:id", verifyJwtToken, getTask);
// router.get("/", verifyJwtToken, getTasks);

export default router;
