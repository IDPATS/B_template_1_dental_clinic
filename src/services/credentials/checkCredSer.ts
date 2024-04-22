import { EntitiesCred } from "../../config/dataSource";
import { ECredential } from "../../entities/credentials/ECredentials";
import { getUserByIdServ } from "../users/getUserByIdServ";
const bcryptjs = require("bcryptjs")

export const checkCredServ = async (credentials: ECredential) => {
    const dataCredUser = await EntitiesCred.findOne({ where: { username: credentials.username } })
    if (!dataCredUser) return "No existe usuario"
    
    const isPasswordMatch = await bcryptjs.compare(credentials.password, dataCredUser.password);
        
        if (!isPasswordMatch) {
            return "Contraseña incorrecta";
        }
        
        
    const getUserId =await getUserByIdServ(dataCredUser.id)

    
     if (!dataCredUser || !isPasswordMatch) {
        return "Credenciales incorrectas";
    }
}