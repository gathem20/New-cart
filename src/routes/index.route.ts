import { Router } from "express";
import authRouter from "./auth.route";

export const rootRouter:Router = Router()
rootRouter.use("/auth" ,authRouter)

