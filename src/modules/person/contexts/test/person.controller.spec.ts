import { Test } from '@nestjs/testing';
import { PersonController } from '../controller';
import { PersonService } from '../service';
import { CreatePersonBodyDTO } from 'src/shared/dtos/createPersonBody.dto';

describe('PersonController', () => {
  let personController: PersonController;
  let personService: PersonService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PersonController],
      providers: [PersonService],
    }).compile();

    personController = moduleRef.get<PersonController>(PersonController);
    personService = moduleRef.get<PersonService>(PersonService);
  });

  describe('create', () => {
    it('should create a new person', async () => {
      const cpf = "9876543210";
      const createPersonBodyDTO: CreatePersonBodyDTO = {
        name: "Michele",
        cpf
      };

      const createdPerson = {
        ...createPersonBodyDTO,
      };

      jest.spyOn(personService, 'createPerson').mockResolvedValue(createdPerson);

      const result = await personController.create(createPersonBodyDTO);

      expect(personService.createPerson).toHaveBeenCalled();
      expect(result).toBe(createdPerson);
    });
  });

  describe('getOnePerson', () => {
    it('should retrieve a specific person', async () => {
      const cpf = "9876543210";

      const retrievedPerson =[ {
        name: "Michele",
        cpf
      }];

      jest.spyOn(personService, 'getOnePerson').mockResolvedValue(retrievedPerson);

      const result = await personController.getOnePerson(cpf);

      expect(personService.getOnePerson).toHaveBeenCalled();
      expect(result).toBe(retrievedPerson);
    });
  });

  describe('deletePerson', () => {
    it('should delete a specific person', async () => {
      const cpf = "9876543210";

      jest.spyOn(personService, 'deletePerson').mockResolvedValue();

      const result = await personController.deletePerson(cpf);

      expect(personService.deletePerson).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });
});
