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
exports.createUserCtrl = void 0;
const createUserServ_1 = require("../../services/users/createUserServ");
// Controlador para manejar la creación de usuarios
const createUserCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body; // Suponiendo que los datos del usuario se envían en el cuerpo de la solicitud
        const newUser = yield (0, createUserServ_1.createUserServ)(userData); // Llamando a la función de servicio para crear un nuevo usuario
        res.status(201).json(newUser); // Respondiendo con el nuevo usuario creado
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message: error.message }); // Manejando errores
    }
});
exports.createUserCtrl = createUserCtrl;
