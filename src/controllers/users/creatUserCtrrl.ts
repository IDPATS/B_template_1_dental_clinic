import { Request, Response } from 'express';
import { createUserServ } from '../../services/users/createUserServ';

// Controlador para manejar la creación de usuarios
export const createUserCtrl = async (req: Request, res: Response) => {
    try {
        const userData = req.body; // Suponiendo que los datos del usuario se envían en el cuerpo de la solicitud
        const newUser = await createUserServ(userData); // Llamando a la función de servicio para crear un nuevo usuario
        res.status(201).json(newUser); // Respondiendo con el nuevo usuario creado
    } catch (error:any) {
        res.status(500).json({ error: 'Internal Server Error', message: error.message }); // Manejando errores
    }
};
