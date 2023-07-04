import { Controller, HttpCode, HttpStatus, Post, Body, Get, Param, Delete } from "@nestjs/common";
import { PersonService } from "./service";
import { CreatePersonBodyDTO } from "src/shared/dtos/createPersonBody.dto";


@Controller('persons')
export class PersonController {
  constructor(
    private service: PersonService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() data: CreatePersonBodyDTO) {
    return await this.service.createPerson(data)
  }

  @Get(':cpf')
  @HttpCode(HttpStatus.OK)
  public async getOnePerson(@Param('cpf') cpf: string) {
    return this.service.getOnePerson(cpf)
  }

  @Delete(':cpf')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deletePerson(
    @Param('cpf') cpf: string
  ) {
    return this.service.deletePerson(cpf)
  }
}
