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
exports.getAllAptServ = void 0;
const dataSource_1 = require("../../config/dataSource");
const getUserByIdServ_1 = require("../users/getUserByIdServ");
const getAllAptServ = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const dataApts = yield dataSource_1.EntitiesUser.findOne({ where: { id: id } });
    if (!dataApts)
        return "Usuario no existente";
    const getUser = yield (0, getUserByIdServ_1.getUserByIdServ)(id);
    if (!getUser) {
        throw new Error("Usuario no encontrado");
    }
    const getAts = getUser.appointments;
    if (getAts.length <= 0)
        return "No tiene turnos";
    return getAts;
});
exports.getAllAptServ = getAllAptServ;
