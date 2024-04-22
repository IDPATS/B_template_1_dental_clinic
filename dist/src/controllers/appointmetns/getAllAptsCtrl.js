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
exports.getAllAptsCtrl = void 0;
const getAllAptsServ_1 = require("../../services/appointments/getAllAptsServ");
const getAllAptsCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataApts = yield (0, getAllAptsServ_1.getAllAptsServ)(); // Llamamos al servicio para obtener todas las citas
        res.status(200).json(dataApts); // Enviamos las citas como respuesta con el código de estado 200 (éxito)
    }
    catch (error) {
        res.status(500).json({ message: error.message }); // Enviamos un mensaje de error con el código de estado 500 (error interno del servidor) si ocurre algún problema
    }
});
exports.getAllAptsCtrl = getAllAptsCtrl;
