// __mocks__/Category.ts
import Category from '../../src/models/Category';

class CategoryMock extends Category {
  private static data: any[] = [];

  static create(category: any) {
    category.id_category = Date.now();
    CategoryMock.data.push(category);
    return Promise.resolve(category);
  }

  static findAll() {
    return Promise.resolve(CategoryMock.data);
  }

  // parei aqui, mockar é chatão


const mockFindByPk = async (id: number): Promise<Category | null> => {
  return categories.find((category) => category.id_category === id) || null;
};

const mockCount = async (options: any): Promise<number> => {
  return categories.filter((category) => category.name === options.where.name).length;
};

const mockUpdate = async (data: Partial<Category>, options: any): Promise<void> => {
  const category = categories.find((category) => category.id_category === options.where.id_category);
  if (category) {
    category.name = data.name!;
  }
};

const mockDestroy = async (options: any): Promise<void> => {
  const index = categories.findIndex((category) => category.id_category === options.where.id_category);
  if (index !== -1) {
    categories.splice(index, 1);
  }
};

export default {
  create: mockCreate,
  findAll: mockFindAll,
  findByPk: mockFindByPk,
  count: mockCount,
  update: mockUpdate,
  destroy: mockDestroy,
};
