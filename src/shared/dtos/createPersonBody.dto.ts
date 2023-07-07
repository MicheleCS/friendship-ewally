import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePersonBodyDTO {
  
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsNotEmpty()
  @MaxLength(11)
  @MinLength(11)
  cpf: string;
}