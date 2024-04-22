import { DataSource } from "typeorm";
import { ECredential } from "../entities/credentials/ECredentials";
import { EUser } from "../entities/users/EUser";
import { EApt } from "../entities/appointments/EApt";
import { DBpassword } from "./envs";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "dpg-coitk8ol5elc73ddi2m0-a",
    port: 5432,
    username: "idpats",
    password: "zc2EZr2l7rQNWph7IZUwCGz1Zfdfj3vy",
    database: "template_dental_clinic",
    synchronize: true,
    logging: true,
    // dropSchema:true,
    entities: [ECredential,EUser,EApt],
    subscribers: [],
    migrations: [],
})

export const EntitiesUser = AppDataSource.getRepository(EUser);
export const EntitiesCred = AppDataSource.getRepository(ECredential);
export const EntitiesApt= AppDataSource.getRepository(EApt);

