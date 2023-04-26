// services/CategoryService.ts
import { Category } from '../models';

export interface ICategoryService {
  create(name: string): Promise<Category>;
  findAll(): Promise<Category[]>;
  findOne(id: string): Promise<Category | null>;
  update(id: string, name: string): Promise<Category | null>;
  delete(id: string): Promise<void>;
}

export class CategoryService implements ICategoryService {
  async create(name: string): Promise<Category> {
    const categoryCount: number = await Category.count({ where: { name } });
    if (categoryCount) {
      throw new Error('Category already exists');
    }
    const newCategory: Category = await Category.create({
      name,
    });
    return newCategory;
  }

  async findAll(): Promise<Category[]> {
    const findCategories: Category[] = await Category.findAll();
    return findCategories;
  }

  async findOne(id: string): Promise<Category | null> {
    let findCategory = await Category.findByPk(id);

    if (!findCategory) {
      throw new Error('ID not found');
    }

    findCategory = await Category.findByPk(id, {
      attributes: {
        exclude: ['password'],
      },
    });

    return findCategory;
  }

  async update(id: string, name: string): Promise<Category | null> {
    const checkCategory = await Category.findByPk(id);
    if (!checkCategory) {
      throw new Error('ID not found');
    }

    await Category.update(
      {
        name,
      },
      {
        where: {
          id_category: id,
        },
      }
    );

    const showCategory = await Category.findByPk(id);
    return showCategory;
  }

  async delete(id: string): Promise<void> {
    const deleteCategory = await Category.findByPk(id);
    if (!deleteCategory) {
      throw new Error('ID not found');
    }
    await Category.destroy({
      where: {
        id_category: id,
      },
    });
  }
}