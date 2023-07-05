import { IsNotEmpty, IsString } from "class-validator";

export class CreateRelationshipBodyDTO {
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  cpf1: string;
}