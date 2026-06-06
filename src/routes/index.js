import { Router } from "express";
import userRouter from "./user.route.js";
import categoriRoute from "./category.route.js";
const router = Router();

router.use("/api", userRouter);
router.use("/api", categoriRoute);

export default router;
