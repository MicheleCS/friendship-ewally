import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('relationship')
export class Relationship {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsNotEmpty()
  @Column({nullable: false})
  cpf1: string;

  @IsNotEmpty()
  @Column({nullable: false})
  cpf2: string;
}