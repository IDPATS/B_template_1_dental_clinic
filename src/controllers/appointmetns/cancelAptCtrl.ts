import { Request, Response } from "express";
import { cancelAptServ } from "../../services/appointments/cancelAptServ";

export const cancelAptCtrl = async (req: Request, res: Response) => {
    try {
        const aptId = Number(req.body.id); // Supongo que el ID de la cita se proporciona en el cuerpo de la solicitud
        const newStatus = req.body.status; // Supongo que el nuevo estado de la cita también se proporciona en el cuerpo de la solicitud

        const aptStatusDto = {
            id: aptId,
            status: newStatus
        };

        const updatedAptStatus = await cancelAptServ(aptStatusDto);

        res.status(200).json(updatedAptStatus);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
};
