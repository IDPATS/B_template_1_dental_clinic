import { EntitiesApt, EntitiesUser } from "../../config/dataSource"
import { getUserByIdServ } from "../users/getUserByIdServ"

export const getAllAptServ = async (id:number) => {
    
    const dataApts = await EntitiesUser.findOne({where:{id:id}})
    if (!dataApts) return "Usuario no existente"
    
    const getUser =await getUserByIdServ(id)
    if (!getUser) {
            throw new Error("Usuario no encontrado");
    }
    
    const getAts = getUser.appointments

    if(getAts.length<=0) return "No tiene turnos"
    return getAts
}