import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PersonEntity } from "src/shared/entities/person.entity";
import { PersonRepository } from 'src/shared/repositories/person.repository';

@Injectable()
export class PersonService {
  private repository = new PersonRepository()

  async createPerson(data: PersonEntity) {
    const personExists = await this.repository.existsPerson(data.cpf)

    if(personExists.length) {
      throw new BadRequestException('Bad Request Exception')
    }
    const response = await this.repository.createPerson(data)
    return response
  }

  async getOnePerson(cpf: string) {
    const response = await this.repository.getOnePerson(cpf)

    if(response.length === 0) {
      throw new NotFoundException('Not Found Person')
    }
    return response
  }

  async deletePerson(cpf: string) {
    return this.repository.deletePerson(cpf)
  }
}