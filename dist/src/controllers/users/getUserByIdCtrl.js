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
exports.getUserByIdController = void 0;
const getUserByIdServ_1 = require("../../services/users/getUserByIdServ");
// Controlador para obtener un usuario por su identificador
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id); // Suponiendo que el identificador del usuario se pasa como un parámetro en la URL
        const user = yield (0, getUserByIdServ_1.getUserByIdServ)(userId); // Llamando al servicio para obtener el usuario por su identificador
        if (user) {
            res.status(200).json(user); // Si se encuentra el usuario, responder con el usuario
        }
        else {
            res.status(404).json({ error: 'Not Found', message: 'User not found' }); // Si no se encuentra el usuario, responder con un error 404
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message: error.message }); // Manejando errores
    }
});
exports.getUserByIdController = getUserByIdController;
