import { EntitiesUser } from "../../config/dataSource";


export const getUsersServ = async () => {
    const allUsers = await EntitiesUser.find();

    return allUsers;
};
