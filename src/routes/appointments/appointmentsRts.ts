import { Router } from "express";
import {  scheduleAptCtrl } from "../../controllers/appointmetns/scheduleAptCtrl";
import { getAllAptCtrl } from "../../controllers/appointmetns/getAllAptCtrl";
import { cancelAptCtrl } from "../../controllers/appointmetns/cancelAptCtrl";
import { getAllAptsCtrl } from "../../controllers/appointmetns/getAllAptsCtrl";

const appointmentsRouter = Router()

appointmentsRouter.post("/schedule",scheduleAptCtrl)
appointmentsRouter.put("/cancel", cancelAptCtrl)
appointmentsRouter.get("/userapts", getAllAptCtrl)
appointmentsRouter.get("/lyst",getAllAptsCtrl)



export default appointmentsRouter
