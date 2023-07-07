import { Test } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { RelationshipService } from '../service';
import { RelationshipEntity } from 'src/shared/entities/relationship';

describe('RelationshipService', () => {
  let relationshipService: RelationshipService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [RelationshipService],
    }).compile();

    relationshipService = moduleRef.get<RelationshipService>(RelationshipService);
  });

  describe('createRelationship', () => {
    it('should create a new relationship', async () => {
      const relationshipData: RelationshipEntity = {
        cpf1: '12345678901',
        cpf: '98765432109',
      };

      jest.spyOn(relationshipService, 'createRelationship').mockResolvedValue(relationshipData);

      const result = await relationshipService.createRelationship(relationshipData);

      expect(result).toBe(relationshipData);
      expect(relationshipService.createRelationship).toHaveBeenCalledWith(relationshipData);
    });
  });

  describe('getAllRelationship', () => {
    it('should retrieve all relationships', async () => {
      const relationships: RelationshipEntity[] = [
        { cpf1: '12345678901', cpf: '98765432109' },
        { cpf1: '45678912301', cpf: '32109876549' },
      ];

      jest.spyOn(relationshipService, 'getAllRelationship').mockResolvedValue(relationships);

      const result = await relationshipService.getAllRelationship();

      expect(result).toBe(relationships);
      expect(relationshipService.getAllRelationship).toHaveBeenCalled();
    });
  });

  describe('getOneRelationship', () => {
    it('should retrieve a specific relationship', async () => {
      const relationshipData: RelationshipEntity = {
        cpf1: '12345678901',
        cpf: '98765432109',
      };

      jest.spyOn(relationshipService, 'getOneRelationship').mockResolvedValue([relationshipData]);

      const result = await relationshipService.getOneRelationship(relationshipData.cpf1);

      expect(result).toBe(relationshipData);
      expect(relationshipService.getOneRelationship).toHaveBeenCalledWith(relationshipData.cpf1);
    });

    it('should throw NotFoundException if relationship does not exist', async () => {
      const cpf = '12345678901';

      jest.spyOn(relationshipService, 'getOneRelationship').mockResolvedValue(null);

      await expect(relationshipService.getOneRelationship(cpf)).rejects.toThrow(NotFoundException);
      expect(relationshipService.getOneRelationship).toHaveBeenCalledWith(cpf);
    });
  });

  describe('getAllRecommendations', () => {
    it('should retrieve all recommendations', async () => {
      const cpf = '12345678901';
      const recommendations = ['98765432109', '45678912301'];

      jest.spyOn(relationshipService, 'getOneRelationship').mockResolvedValue(recommendations);
      jest.spyOn(relationshipService, 'getAllRecommendations').mockResolvedValue(recommendations);

      const result = await relationshipService.getAllRecommendations(cpf);

      expect(result).toBe(recommendations);
      expect(relationshipService.getOneRelationship).toHaveBeenCalledWith(cpf);
      expect(relationshipService.getAllRecommendations).toHaveBeenCalledWith(cpf);
    });

    it('should throw NotFoundException if relationship does not exist', async () => {
      const cpf = '12345678901';

      jest.spyOn(relationshipService, 'getOneRelationship').mockResolvedValue(null);

      await expect(relationshipService.getAllRecommendations(cpf)).rejects.toThrow(NotFoundException);
      expect(relationshipService.getOneRelationship).toHaveBeenCalledWith(cpf);
    });
  });
});
