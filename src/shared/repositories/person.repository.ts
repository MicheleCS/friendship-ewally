import { PersonEntity } from "../entities/person.entity";

export class PersonRepository {
  private person: PersonEntity[] = []
  public async createPerson(data: PersonEntity) {
    this.person.push(data)
    
    return data
  }
}
