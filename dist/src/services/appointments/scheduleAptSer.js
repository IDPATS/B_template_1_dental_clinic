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
exports.scheduleAptServ = void 0;
const EApt_1 = require("../../entities/appointments/EApt");
const dataSource_1 = require("../../config/dataSource");
const scheduleAptServ = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, date, hour, minute, status } = req.body; // Recibimos el ID del usuario y los datos del appointment
        // Creamos una instancia de EApt y asignamos los valores
        const newAppointment = new EApt_1.EApt();
        newAppointment.userId = userId;
        newAppointment.date = date;
        newAppointment.hour = hour;
        newAppointment.minute = minute;
        newAppointment.status = status;
        // Guardamos el nuevo appointment en la base de datos
        const savedAppointment = yield dataSource_1.EntitiesApt.save(newAppointment);
        // Respondemos con el appointment guardado
        res.status(201).json(savedAppointment);
    }
    catch (error) {
        throw new Error(`Error creating appointment: ${error.message}`);
    }
});
exports.scheduleAptServ = scheduleAptServ;
