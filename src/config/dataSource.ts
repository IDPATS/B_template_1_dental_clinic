import { DataSource } from "typeorm";
import { ECredential } from "../entities/credentials/ECredentials";
import { EUser } from "../entities/users/EUser";
import { EApt } from "../entities/appointments/EApt";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1026387",
    database: "typeorm",
    synchronize: true,
    logging: true,
    dropSchema:true,
    entities: [ECredential,EUser,EApt],
    subscribers: [],
    migrations: [],
})

export const EntitiesUser = AppDataSource.getRepository(EUser);
export const EntitiesCred = AppDataSource.getRepository(ECredential);
export const EntitiesApt= AppDataSource.getRepository(EApt);

