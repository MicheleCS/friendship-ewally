import { Test } from '@nestjs/testing';
import { RelationshipController } from '../controller';
import { RelationshipService } from '../service';
import { CreateRelationshipBodyDTO } from 'src/shared/dtos/createRelationshipBody.dto';

describe('RelationshipController', () => {
  let relationshipController: RelationshipController;
  let relationshipService: RelationshipService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [RelationshipController],
      providers: [RelationshipService],
    }).compile();

    relationshipController = moduleRef.get<RelationshipController>(RelationshipController);
    relationshipService = moduleRef.get<RelationshipService>(RelationshipService);
  });

  describe('create', () => {
    it('should create a new relationship', async () => {
      const relationshipData: CreateRelationshipBodyDTO = {
        cpf: '12345678901',
        cpf1: '98765432109',
      };

      jest.spyOn(relationshipService, 'createRelationship').mockResolvedValue(relationshipData);

      const result = await relationshipController.create(relationshipData);

      expect(result).toBe(relationshipData);
      expect(relationshipService.createRelationship).toHaveBeenCalledWith(relationshipData);
    });
  });

  describe('getAllRelationship', () => {
    it('should retrieve all relationships', async () => {
      const relationships = [
        { cpf: '12345678901', cpf1: '98765432109' },
        { cpf: '45678912301', cpf1: '32109876549' },
      ];

      jest.spyOn(relationshipService, 'getAllRelationship').mockResolvedValue(relationships);

      const result = await relationshipController.getAllRelationship();

      expect(result).toBe(relationships);
      expect(relationshipService.getAllRelationship).toHaveBeenCalled();
    });
  });

  describe('getOneRelationship', () => {
    it('should retrieve a specific relationship', async () => {
      const relationshipData: CreateRelationshipBodyDTO = {
        cpf: '12345678901',
        cpf1: '98765432109',
      };

      jest.spyOn(relationshipService, 'getOneRelationship').mockResolvedValue([relationshipData]);

      const result = await relationshipController.getOneRelationship(relationshipData.cpf);

      expect(result).toBe(relationshipData);
      expect(relationshipService.getOneRelationship).toHaveBeenCalledWith(relationshipData.cpf);
    });
  });

  describe('getAllRecommendations', () => {
    it('should retrieve all recommendations', async () => {
      const cpf = '12345678901';
      const recommendations = ['98765432109', '45678912301'];

      jest.spyOn(relationshipService, 'getAllRecommendations').mockResolvedValue(recommendations);

      const result = await relationshipController.getAllRecommendations(cpf);

      expect(result).toBe(recommendations);
      expect(relationshipService.getAllRecommendations).toHaveBeenCalledWith(cpf);
    });
  });
});
