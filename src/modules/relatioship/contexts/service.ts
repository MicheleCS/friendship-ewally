import { Injectable, NotFoundException } from "@nestjs/common";
import { RelationshipEntity } from "src/shared/entities/relationship";
import { PersonRepository } from "src/shared/repositories/person.repository";
import { RelationshipRepository } from "src/shared/repositories/relationship.repository";

@Injectable()
export class RelationshipService {
  private repository = new RelationshipRepository()
  private personRepository = new PersonRepository()

  async createRelationship(data: RelationshipEntity) {
    const cpf = await this.personRepository.existsPerson( data.cpf)
    if (!cpf) throw new NotFoundException('Not Found Person')
  
    const cpf1 = await this.personRepository.existsPerson(data.cpf)
    if (!cpf1) throw new NotFoundException('Not Found Person')

    return this.repository.createRelationship(data)
  }

  async getAllRelationship() {
    return this.repository.getAllRelationship()
  }

  async getOneRelationship(cpf: string) {
    const response = await this.repository.getOneRelationship(cpf)

    if(response.length === 0) {
      throw new NotFoundException('Not Found Exception')
    }

    return response
  }

  async getAllRecommendations(cpf: string) {
    const relationship = await this.repository.getOneRelationship(cpf)
      if(relationship.length === 0) {
        throw new NotFoundException('Not Found Exception')
      }

    const listFriends: string[] = [];
     
    relationship.forEach((cpf) => {
      const friends = this.repository.getOneRelationship(cpf.cpf1)

      if(friends) {
        const recommendations = this.repository.getAllRecommendations(cpf.cpf1)
        return recommendations
      }
      if (!listFriends.includes('cpf')) {
        listFriends.push('cpf');
      }
    });
    return listFriends
  }
}
