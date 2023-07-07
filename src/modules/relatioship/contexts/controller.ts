import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { RelationshipService } from "./service";
import { CreateRelationshipBodyDTO } from "src/shared/dtos/createRelationshipBody.dto";

@Controller('relationships') 
export class RelationshipController {
  constructor(
    private service: RelationshipService
  ){}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() data: CreateRelationshipBodyDTO) {
    return await this.service.createRelationship(data)
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  public async getAllRelationship() {
    return this.service.getAllRelationship()
  }

  @Get(':cpf')
  @HttpCode(HttpStatus.OK)
   public async getOneRelationship(@Param('cpf') cpf: string){
    return this.service.getOneRelationship(cpf)
  }

  @Get('recommendations/:cpf')
  @HttpCode(HttpStatus.OK)
   public async getAllRecommendations(@Param('cpf') cpf: string) {
    return this.service.getAllRecommendations(cpf)
  }
}
