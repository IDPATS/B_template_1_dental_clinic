import { Request, Response } from "express";
import { getAllAptsServ } from "../../services/appointments/getAllAptsServ";

export const getAllAptsCtrl = async (req: Request, res: Response) => {
    try {
        const dataApts = await getAllAptsServ(); // Llamamos al servicio para obtener todas las citas

        res.status(200).json(dataApts); // Enviamos las citas como respuesta con el código de estado 200 (éxito)
    } catch (error:any) {
        res.status(500).json({ message: error.message }); // Enviamos un mensaje de error con el código de estado 500 (error interno del servidor) si ocurre algún problema
    }
};
