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
exports.cancelAptCtrl = void 0;
const cancelAptServ_1 = require("../../services/appointments/cancelAptServ");
const cancelAptCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const aptId = Number(req.body.id); // Supongo que el ID de la cita se proporciona en el cuerpo de la solicitud
        const newStatus = req.body.status; // Supongo que el nuevo estado de la cita también se proporciona en el cuerpo de la solicitud
        const aptStatusDto = {
            id: aptId,
            status: newStatus
        };
        const updatedAptStatus = yield (0, cancelAptServ_1.cancelAptServ)(aptStatusDto);
        res.status(200).json(updatedAptStatus);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.cancelAptCtrl = cancelAptCtrl;
