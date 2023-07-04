import { Module } from "@nestjs/common";
import { PersonService } from "./contexts/service";
import { PersonController } from "./contexts/controller";


@Module({
    imports: [],
    controllers: [PersonController],
    providers: [PersonService]
})
export class PersonModule {}