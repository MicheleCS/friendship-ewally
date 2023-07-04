import { IsNotEmpty, IsString } from "class-validator";

export class CretePersonBodyDTO {
  
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsNotEmpty()
  cpf: string;
}