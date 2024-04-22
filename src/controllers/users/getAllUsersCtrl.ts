import { Request, Response } from 'express';
import { getUsersServ } from '../../services/users/getUsersServ';

// Controlador para obtener todos los usuarios
export const getUsersCtrl = async (req: Request, res: Response) => {
    try {
        const allUsers = await getUsersServ(); // Llamando al servicio para obtener todos los usuarios
        res.status(200).json(allUsers); // Respondiendo con todos los usuarios recuperados
    } catch (error:any) {
        res.status(500).json({ error: 'Internal Server Error', message: error.message }); // Manejando errores
    }
};
