import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ECredential } from "../credentials/ECredentials";
import { join } from "path";
import { EApt } from "../appointments/EApt";

@Entity({
    name:"users"
})
export class EUser{
    @PrimaryGeneratedColumn()
    id: number;
    
    @OneToOne(type => ECredential, {
        eager:true,
        cascade:true
    })
    @JoinColumn({referencedColumnName:"id"})
    credentials: ECredential
    
    @OneToMany(type => EApt, apt=>apt.user,({
        eager: true,
        cascade: true,
    }))
    appointments: EApt[]

    @Column()
    firstname: string;
    @Column()
    lastname: string;
    @Column()
    age: string;
    @Column()
    email: string;
    @Column()
    birthday: Date
    @Column()
    ine: string
    @Column()
    tel:string
}