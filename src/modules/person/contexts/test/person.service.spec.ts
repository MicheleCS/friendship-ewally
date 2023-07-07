import { Test } from '@nestjs/testing';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { PersonService } from '../service';

describe('PersonService', () => {
  let personService: PersonService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PersonService],
    }).compile();

    personService = moduleRef.get<PersonService>(PersonService);
  });

  describe('createPerson', () => {
    it('should create a new person', async () => {
      const cpf = "9876543210";
      const personData = {
        name: 'Michele',
        cpf,
      };

      jest.spyOn(personService, 'createPerson').mockResolvedValue(personData);

      const result = await personService.createPerson(personData);

      expect(personService.createPerson).toHaveBeenCalledWith(personData);
      expect(result).toBe(personData);
    });

    it('should throw BadRequestException if person already exists', async () => {
      const cpf = "9876543210";
      const personData = {
        name: 'Michele',
        cpf,
      };

      jest.spyOn(personService, 'createPerson').mockRejectedValue(new BadRequestException('Bad Request Exception'));

      await expect(personService.createPerson(personData)).rejects.toThrow(BadRequestException);
      expect(personService.createPerson).toHaveBeenCalledWith(personData);
    });
  });

  describe('getOnePerson', () => {
    it('should retrieve a specific person', async () => {
      const cpf = "9876543210";

      const retrievedPerson = [{
        name: 'Michele',
        cpf,
      }];

      jest.spyOn(personService, 'getOnePerson').mockResolvedValue(retrievedPerson);

      const result = await personService.getOnePerson(cpf);

      expect(personService.getOnePerson).toHaveBeenCalledWith(cpf);
      expect(result).toBe(retrievedPerson);
    });

    it('should throw NotFoundException if person does not exist', async () => {
      const cpf = "9876543210";

      jest.spyOn(personService, 'getOnePerson').mockRejectedValue(new NotFoundException('Not Found Person'));

      await expect(personService.getOnePerson(cpf)).rejects.toThrow(NotFoundException);
      expect(personService.getOnePerson).toHaveBeenCalledWith(cpf);
    });
  });

  describe('deletePerson', () => {
    it('should delete a specific person', async () => {
      const cpf = "9876543210";

      jest.spyOn(personService, 'deletePerson');

      await personService.deletePerson(cpf);

      expect(personService.deletePerson).toHaveBeenCalledWith(cpf);
    });
  });
});
