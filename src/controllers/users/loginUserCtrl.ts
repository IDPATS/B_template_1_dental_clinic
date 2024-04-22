import { Request, Response } from "express";
import { getUserByIdServ } from "../../services/users/getUserByIdServ";
import { checkCredServ } from "../../services/credentials/checkCredSer";

export const loginUserCtrl = async (req: Request, res: Response) => {
    try {
        const { username, password,id } = req.body;

        // Verificar las credenciales
        const validation = await checkCredServ({id,username, password,});

        if (validation === "No existe usuario" || validation === "Contraseña incorrecta" || validation === "Credenciales incorrectas") {
            // Si las credenciales son incorrectas, devolver un mensaje de error
            res.status(401).json({ success: false, message: validation });
        } else {
            // Si las credenciales son válidas, obtener el usuario por su ID
            const user = await getUserByIdServ(id);

            // Si se encuentra el usuario, devolverlo como respuesta
            if (user) {
                res.status(200).json({ success: true, user });
            } else {
                // Si el usuario no se encuentra, devolver un mensaje de error
                res.status(404).json({ success: false, message: "Usuario no encontrado" });
            }
        }
    } catch (error:any) {
        // Manejar cualquier error que ocurra durante el proceso
        res.status(500).json({ success: false, message: `Error en el servidor: ${error.message}` });
    }
};
