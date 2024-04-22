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
exports.getUsersCtrl = void 0;
const getUsersServ_1 = require("../../services/users/getUsersServ");
// Controlador para obtener todos los usuarios
const getUsersCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield (0, getUsersServ_1.getUsersServ)(); // Llamando al servicio para obtener todos los usuarios
        res.status(200).json(allUsers); // Respondiendo con todos los usuarios recuperados
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message: error.message }); // Manejando errores
    }
});
exports.getUsersCtrl = getUsersCtrl;
