import { AptDto } from "../appoinments/AptDtp";
import { CredentialDto } from "./CredentialDto";

export class UserDto{
    firstname: string;
    lastname: string;
    email: string;
    age: string;
    birthday: Date;
    ine: string;
    tel: string;
    credentials: CredentialDto
    // appointments: AptDto
}