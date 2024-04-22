import { EntitiesUser } from "../../config/dataSource"

export const getUserByIdServ = async (id:number) => {
    const idUser = await EntitiesUser.findOne({where:{id:id}})
    return idUser
}