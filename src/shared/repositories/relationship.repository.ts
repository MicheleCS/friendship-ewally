import { RelationshipEntity } from "../entities/relationship"

export class RelationshipRepository {
  private relationship: RelationshipEntity[] = []

  public async createRelationship(data: RelationshipEntity) {
    this.relationship.push(data)

    return data
  }

  public async getAllRelationship() {
    return this.relationship
  }

  public async getOneRelationship(cpf: string) {
    return this.relationship
    .filter(relationship => {
      return relationship.cpf === cpf
    })
  }

  public async deleteRelationship(cpf: string) {
    for(let i = 0; i < this.relationship.length; i++){
      if(this.relationship[i].cpf == cpf){
        this.relationship.splice(i, 1)
      }
    }
  }

  public async getAllRecommendations(cpf: string) {
    return this.relationship
    .forEach((cpf1) => {
      return this.relationship.includes(cpf1)
    })
  }
}
