import { Controller, HttpCode, HttpStatus, Post, Body } from "@nestjs/common";
import { PersonService } from "./service";
import { CreatePersonBodyDTO } from "src/shared/dtos/createPersonBody.dto";


@Controller("persons")
export class PersonController {
  constructor(
    private service: PersonService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() data: CreatePersonBodyDTO) {
    return await this.service.createPerson(data)
  }
}
