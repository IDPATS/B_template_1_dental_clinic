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
exports.checkCredServ = void 0;
const dataSource_1 = require("../../config/dataSource");
const getUserByIdServ_1 = require("../users/getUserByIdServ");
const bcryptjs = require("bcryptjs");
const checkCredServ = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    const dataCredUser = yield dataSource_1.EntitiesCred.findOne({ where: { username: credentials.username } });
    if (!dataCredUser)
        return "No existe usuario";
    const isPasswordMatch = yield bcryptjs.compare(credentials.password, dataCredUser.password);
    if (!isPasswordMatch) {
        return "Contraseña incorrecta";
    }
    const getUserId = yield (0, getUserByIdServ_1.getUserByIdServ)(dataCredUser.id);
    if (!dataCredUser || !isPasswordMatch) {
        return "Credenciales incorrectas";
    }
});
exports.checkCredServ = checkCredServ;
