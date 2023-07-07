import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PersonModule } from './modules/person/person.module';
import { RelationshipModule } from './modules/relatioship/relationship.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PersonModule,
    RelationshipModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
