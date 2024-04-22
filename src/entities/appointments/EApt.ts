import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EUser } from "../users/EUser";

@Entity({
    name:"appointments"
})
export class EApt{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    date: Date;
    @Column()
    hour: string;
    @Column()
    minute: string
    @Column()
    status: "active" | "cancelled"
    @Column({ name: "user_id" }) // Agregamos una columna para almacenar el ID del usuario
    userId: number; // Atributo para almacenar el ID del usuario

    // Relación con el usuario basada solo en el ID
    @ManyToOne(type => EUser)
    @JoinColumn({ name: "user_id", referencedColumnName: "id" }) // Vinculamos la columna user_id con el ID de la tabla EUser
    user: EUser;
}