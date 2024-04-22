import { Request, Response } from "express";
import { EApt } from "../../entities/appointments/EApt";
import { EntitiesApt } from "../../config/dataSource";

export const scheduleAptServ = async (req: Request, res: Response) => {
    try {
        const { userId, date, hour, minute, status } = req.body; // Recibimos el ID del usuario y los datos del appointment

        // Creamos una instancia de EApt y asignamos los valores
        const newAppointment = new EApt();
        newAppointment.userId = userId;
        newAppointment.date = date;
        newAppointment.hour = hour;
        newAppointment.minute = minute;
        newAppointment.status = status;

        // Guardamos el nuevo appointment en la base de datos
        const savedAppointment = await EntitiesApt.save(newAppointment);

        // Respondemos con el appointment guardado
        res.status(201).json(savedAppointment);
    } catch (error:any) {
        throw new Error(`Error creating appointment: ${error.message}`);
    }
};
