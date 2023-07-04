import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('person')
@Unique(['cpf'])
export class PersonEntity {

  @IsNotEmpty()
  @Column({nullable: false})
  name: string;

  @IsNotEmpty()
  @Column({nullable: false})
  cpf: string;

}
