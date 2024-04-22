"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const envs_1 = require("./config/envs");
const dataSource_1 = require("./config/dataSource");
try {
    dataSource_1.AppDataSource.initialize().then((res) => {
        console.log("Se ha inicializado la coneción a la base de datos");
        server_1.default.listen(envs_1.PORT, () => {
            console.log(`El servidor backend se encuentra corriendo en el puerto ${envs_1.PORT}`);
        });
    });
}
catch (error) {
    console.error('Error al iniciar el servidor backend:', error);
}
