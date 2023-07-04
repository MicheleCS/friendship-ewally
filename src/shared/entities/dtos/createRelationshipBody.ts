import { IsNotEmpty, IsString } from "class-validator";

export class CreteRelationshipBodyDTO {
  @IsString()
  @IsNotEmpty()
  cpf1: string;

  @IsString()
  @IsNotEmpty()
  cpf2: string;
}