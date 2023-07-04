import { Injectable } from "@nestjs/common";
import { PersonEntity } from "src/shared/entities/person.entity";
import { PersonRepository } from "src/shared/repositories/person.repository";

@Injectable()
export class PersonService {
  private repository = new PersonRepository()
  async createPerson(data: PersonEntity) {
    const response = await this.repository.createPerson(data)
    return response
  }
}