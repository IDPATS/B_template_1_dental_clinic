"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserCtrl = void 0;
const getUserByIdServ_1 = require("../../services/users/getUserByIdServ");
const checkCredSer_1 = require("../../services/credentials/checkCredSer");
const loginUserCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, id } = req.body;
        // Verificar las credenciales
        const validation = yield (0, checkCredSer_1.checkCredServ)({ id, username, password, });
        if (validation === "No existe usuario" || validation === "Contraseña incorrecta" || validation === "Credenciales incorrectas") {
            // Si las credenciales son incorrectas, devolver un mensaje de error
            res.status(401).json({ success: false, message: validation });
        }
        else {
            // Si las credenciales son válidas, obtener el usuario por su ID
            const user = yield (0, getUserByIdServ_1.getUserByIdServ)(id);
            // Si se encuentra el usuario, devolverlo como respuesta
            if (user) {
                res.status(200).json({ success: true, user });
            }
            else {
                // Si el usuario no se encuentra, devolver un mensaje de error
                res.status(404).json({ success: false, message: "Usuario no encontrado" });
            }
        }
    }
    catch (error) {
        // Manejar cualquier error que ocurra durante el proceso
        res.status(500).json({ success: false, message: `Error en el servidor: ${error.message}` });
    }
});
exports.loginUserCtrl = loginUserCtrl;
