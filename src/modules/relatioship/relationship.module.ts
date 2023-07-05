import { RelationshipService } from "./contexts/service";
import { RelationshipController } from "./contexts/controller";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [RelationshipController],
  providers: [RelationshipService]
})
export class RelationshipModule {}