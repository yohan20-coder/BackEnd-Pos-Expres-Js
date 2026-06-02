import { Router } from "express";
import { createUser, updateUser, loginUser, deleteUser} from "../controllers/user.controller.js";
import { autenticate } from "../controllers/error.controller.js";
const userRouter = Router();

userRouter.post("/users", createUser);
userRouter.put("/users/:id", autenticate, updateUser);
userRouter.post("/users/login", loginUser);
userRouter.delete("/users/:id", autenticate, deleteUser);

export default userRouter;