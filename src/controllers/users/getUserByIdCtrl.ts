import { Request, Response } from 'express';
import { getUserByIdServ } from '../../services/users/getUserByIdServ';

// Controlador para obtener un usuario por su identificador
export const getUserByIdController = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id); // Suponiendo que el identificador del usuario se pasa como un parámetro en la URL
        const user = await getUserByIdServ(userId); // Llamando al servicio para obtener el usuario por su identificador
        if (user) {
            res.status(200).json(user); // Si se encuentra el usuario, responder con el usuario
        } else {
            res.status(404).json({ error: 'Not Found', message: 'User not found' }); // Si no se encuentra el usuario, responder con un error 404
        }
    } catch (error:any) {
        res.status(500).json({ error: 'Internal Server Error', message: error.message }); // Manejando errores
    }
};
