import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateRelationshipBodyDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(11)
  @MinLength(11)
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(11)
  @MinLength(11)
  cpf1: string;
}