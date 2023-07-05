import { RelationshipEntity } from "../entities/relationship"

export class RelationshipRepository {
  private relationship: RelationshipEntity[] = []

  public async createRelationship(data: RelationshipEntity) {
    this.relationship.push(data)

    return data
  }

  public async getAllRelationship() {
    return await this.relationship
  }

  public async getOneRelationship(cpf: string) {
    return this.relationship
    .filter(relationship => {
      return relationship.cpf === cpf
    })
  }
}