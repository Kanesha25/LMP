import express from "express";
import {
  signUp,
  login,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/users", getAllUsers);
router.get("/user/:id", getOneUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

export { router as UserRouter };
