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
exports.createUserServ = void 0;
const dataSource_1 = require("../../config/dataSource");
const createCredServ_1 = require("../credentials/createCredServ");
const createUserServ = (dataUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Crear las credenciales
        const newCredentialsData = {
            username: dataUser.credentials.username,
            password: dataUser.credentials.password
        };
        const credUser = yield dataSource_1.EntitiesCred.findOne({ where: { username: newCredentialsData.username } });
        if (credUser) {
            return "El usuario ya existe, intente con otro";
        }
        const savedCredentials = yield (0, createCredServ_1.createCredServ)(newCredentialsData); // Llamar al servicio para crear las credenciales
        // Crear el usuario con las credenciales creadas
        const newUser = {
            firstname: dataUser.firstname,
            lastname: dataUser.lastname,
            email: dataUser.email,
            age: dataUser.age,
            birthday: dataUser.birthday,
            ine: dataUser.ine,
            tel: dataUser.tel,
            credentials: {
                username: savedCredentials.username,
                password: savedCredentials.password
            }
        };
        const savedUser = yield dataSource_1.EntitiesUser.save(newUser); // Guardar el nuevo usuario
        return savedUser;
    }
    catch (error) {
        // Manejar cualquier error que pueda ocurrir durante la creación del usuario
        throw new Error(`Error creating user: ${error.message}`);
    }
});
exports.createUserServ = createUserServ;
