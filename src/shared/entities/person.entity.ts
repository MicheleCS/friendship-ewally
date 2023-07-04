import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('users')
@Unique(['cpf'])
export class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsNotEmpty()
  @Column({nullable: false})
  name: string;

  @IsNotEmpty()
  @Column({nullable: false})
  cpf: string;

}
