import { PersonEntity } from "../entities/person.entity";

export class PersonRepository {
  private person: PersonEntity[] = []

  public async createPerson(data: PersonEntity) {
    this.person.push(data)
    
    return data
  }

  public async existsPerson(cpf: string) {
    return this.person.filter((person) => person.cpf === cpf)
  }

  public async getOnePerson(cpf:string) {
    return await this.person
    .filter(person => {
      return person.cpf == cpf
    })
  }

  public async deletePerson(cpf: string) {
    for(let i = 0; i < this.person.length; i++){
      if(this.person[i].cpf == cpf){
        this.person.splice(i, 1)
      }
    }
  }
}
