import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:"credentials"
})
export class ECredential{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    password: string
} 