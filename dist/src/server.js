"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import morgan from "morgan"
const routes_1 = __importDefault(require("./routes"));
// Creación de la instancia server para la aplicación de express
const server = (0, express_1.default)();
// Middleware para el registro de la solicitud HTTP
// server.use(morgan())
// Middleware para permitir solicitudes desde cualquier origen
server.use((0, cors_1.default)());
// Middlewares para analizar el cuerpo de las solicudes en formato JSON
server.use(express_1.default.json());
// Configuración de rutas
server.use(routes_1.default);
exports.default = server;
