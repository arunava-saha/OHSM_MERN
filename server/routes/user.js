import express from "express";
import { Login, Register } from "../controllers/user.js";
const Router = express.Router();

Router.post("/register", Register);
Router.post("/login", Login);

export default Router;
