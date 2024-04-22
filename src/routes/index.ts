import { Router } from "express";
import usersRouter from "./users/usersRts";
import appointmentsRouter from "./appointments/appointmentsRts";

const router = Router()

// Rutas 
router.use("/users", usersRouter)
router.use("/apt",appointmentsRouter)

export default router