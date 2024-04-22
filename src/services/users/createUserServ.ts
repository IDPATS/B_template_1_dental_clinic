import { EntitiesCred, EntitiesUser } from "../../config/dataSource";
import { UserDto } from "../../dto/credentials/UserDto";
import { createCredServ } from "../credentials/createCredServ";

export const createUserServ = async (dataUser: UserDto) => {
    try {
        // Crear las credenciales
        const newCredentialsData = {
            username: dataUser.credentials.username, 
            password: dataUser.credentials.password 
        };

        const credUser = await EntitiesCred.findOne({ where: { username: newCredentialsData.username } })
        
        if (credUser) {
            return "El usuario ya existe, intente con otro"
        }
        const savedCredentials = await createCredServ(newCredentialsData); // Llamar al servicio para crear las credenciales

        // Crear el usuario con las credenciales creadas
        const newUser: UserDto = {
            firstname: dataUser.firstname,
            lastname: dataUser.lastname,
            email:dataUser.email,
            age: dataUser.age,
            birthday: dataUser.birthday,
            ine: dataUser.ine,
            tel: dataUser.tel,
            credentials: {
                username: savedCredentials.username,
                password: savedCredentials.password
            }
        };

        const savedUser = await EntitiesUser.save(newUser); // Guardar el nuevo usuario
        return savedUser;
    } catch (error:any) {
        // Manejar cualquier error que pueda ocurrir durante la creación del usuario
        throw new Error(`Error creating user: ${error.message}`);
    }
};