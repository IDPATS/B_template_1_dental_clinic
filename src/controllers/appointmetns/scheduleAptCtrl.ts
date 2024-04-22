import { Request, Response } from "express";
import { scheduleAptServ } from "../../services/appointments/scheduleAptSer";

export const scheduleAptCtrl = async (req: Request, res: Response) => {
    try {
        await scheduleAptServ(req, res);
    } catch (error) {
        console.error("Error creating appointment:", error);
        res.status(500).json({ message: "Error creating appointment" });
    }
};
