import { Router } from "express";
import UserController from "../controller/UserController.js";
import checkToken from "../../../config/auth/checkToken.js";

const router = new Router();

router.post("/auth/user/token", UserController.getAccessToken);

router.use(checkToken);

router.get("/auth/user/email/:email", UserController.findByEmail);


export default router;