import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity('user_roles')
export class UserRole {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
