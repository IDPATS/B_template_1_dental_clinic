import server from "./server";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/dataSource";

try {
    AppDataSource.initialize().then((res) => {
        console.log("Se ha inicializado la coneción a la base de datos")
        server.listen(PORT, () => {
        console.log(`El servidor backend se encuentra corriendo en el puerto ${PORT}`);
    });
    })
} catch (error) {
    console.error('Error al iniciar el servidor backend:', error);
}
