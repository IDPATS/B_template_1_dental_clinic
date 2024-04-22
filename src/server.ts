import express from "express"
import cors from "cors"
// import morgan from "morgan"

import router from "./routes"

// Creación de la instancia server para la aplicación de express
const server = express()

// Middleware para el registro de la solicitud HTTP
// server.use(morgan())

// Middleware para permitir solicitudes desde cualquier origen
server.use(cors());

// Middlewares para analizar el cuerpo de las solicudes en formato JSON
server.use(express.json())

// Configuración de rutas
server.use(router)

export default server