"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitiesApt = exports.EntitiesCred = exports.EntitiesUser = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const ECredentials_1 = require("../entities/credentials/ECredentials");
const EUser_1 = require("../entities/users/EUser");
const EApt_1 = require("../entities/appointments/EApt");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "dpg-coitk8ol5elc73ddi2m0-a",
    port: 5432,
    username: "idpats",
    password: "zc2EZr2l7rQNWph7IZUwCGz1Zfdfj3vy",
    database: "template_dental_clinic",
    synchronize: true,
    logging: true,
    // dropSchema:true,
    entities: [ECredentials_1.ECredential, EUser_1.EUser, EApt_1.EApt],
    subscribers: [],
    migrations: [],
});
exports.EntitiesUser = exports.AppDataSource.getRepository(EUser_1.EUser);
exports.EntitiesCred = exports.AppDataSource.getRepository(ECredentials_1.ECredential);
exports.EntitiesApt = exports.AppDataSource.getRepository(EApt_1.EApt);
