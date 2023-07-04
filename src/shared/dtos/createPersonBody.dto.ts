import { IsNotEmpty, IsString } from "class-validator";

export class CreatePersonBodyDTO {
  
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsNotEmpty()
  cpf: string;
}