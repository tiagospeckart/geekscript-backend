import { Request, Response } from 'express';
import { ICategoryService } from '../services/CategoryService';
import MESSAGE from '../constants/messages';

export class CategoryController {
  constructor(private categoryService: ICategoryService) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name } = req.body;
      const newCategory = await this.categoryService.create(name);
      return res.status(201).json(newCategory);
    } catch (error) {
      return res.status(400).json({ "message": MESSAGE.ERROR.REGISTER.CATEGORY });
    }
  };

  findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const categories = await this.categoryService.findAll();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ "message": MESSAGE.ERROR.SEARCH_DB });
    }
  };

  findOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const category = await this.categoryService.findOne(id);
      return res.status(200).json(category);
    } catch (error) {
      return res.status(404).json({"message": MESSAGE.ERROR.ID_NOT_FOUND });
    }
  };
    
  update = async (req: Request, res: Response): Promise<Response> => {
    try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedCategory = await this.categoryService.update(id, name);
    return res.status(200).json(updatedCategory);
    } catch (error) {
    return res.status(500).json({ "message": MESSAGE.ERROR.UPDATE_REGISTER });
    }
    };
    
    delete = async (req: Request, res: Response): Promise<Response> => {
    try {
    const { id } = req.params;
    await this.categoryService.delete(id);
    return res.status(204).json();
    } catch (error) {
    return res.status(500).json({ "message": MESSAGE.ERROR.DELETE });
    }
    };
    }
