import { Request, Response } from 'express';
import { CategoryMock } from '../models/Category.mock';
import categoryController from './CategoryController';

describe('Category controller', () => {
  describe('create', () => {
    let req: Request;
    let res: Response;

    beforeEach(() => {
      req = {
        body: { name: 'test category' },
      } as Request;

      res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      } as unknown as Response;
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should create a new category', async () => {
      CategoryMock.count.mockResolvedValue(0);
      const newCategory = {
        id_category: 1,
        name: 'test category',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };
      CategoryMock.create.mockResolvedValue(newCategory);

      await categoryController.create(req, res);

      expect(CategoryMock.count).toHaveBeenCalledWith({ where: { name: 'test category' } });
      expect(CategoryMock.create).toHaveBeenCalledWith({ name: 'test category' });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(newCategory);
    });

    it('should return an error when the category already exists', async () => {
      CategoryMock.count.mockResolvedValue(1);

      await categoryController.create(req, res);

      expect(CategoryMock.count).toHaveBeenCalledWith({ where: { name: 'test category' } });
      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith('categoria já existente');
    });

    it('should return an error when the category cannot be created', async () => {
      CategoryMock.count.mockResolvedValue(0);
      CategoryMock.create.mockRejectedValue(new Error('Failed to create category'));

      await categoryController.create(req, res);

      expect(CategoryMock.count).toHaveBeenCalledWith({ where: { name: 'test category' } });
      expect(CategoryMock.create).toHaveBeenCalledWith({ name: 'test category' });
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith('Não foi possível realizar o cadastro');
    });
  });
});