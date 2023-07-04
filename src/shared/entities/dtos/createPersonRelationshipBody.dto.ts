import { IsNotEmpty, IsString } from "class-validator";

export class CreatePersonRelationshipBodyDTO {
  @IsString()
  @IsNotEmpty()
  person_id: string;

  @IsString()
  @IsNotEmpty()
  relationship_id: string;
}
