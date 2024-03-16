import express from "express";
import {
  signUp,
  addUser,
  login,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/adduser", addUser);
router.post("/login", login);
router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export { router as UserRouter };
