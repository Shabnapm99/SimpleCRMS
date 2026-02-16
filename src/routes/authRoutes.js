import { Router } from "express";
import UserModel from "../models/UserModel.js";
import { login } from "../controllers/authController.js";

const router = Router();

router.post('/login',login)

export default router;