import express from "express";
import { ClerkWebhooks } from "../controllers/userController.js"; // Corrected the import to match the export name

const userRouter = express.Router();

userRouter.post("/webhooks", ClerkWebhooks); // Corrected usage

export default userRouter;
