import { EntitiesApt } from "../../config/dataSource"

export const getAllAptsServ = async () => {
    const dataApts = await EntitiesApt.find()
    return dataApts
}