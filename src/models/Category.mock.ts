export const CategoryMock = {
  findAll: jest.fn(),
  create: jest.fn().mockResolvedValue({
    id_category: 1,
    name: 'Test category',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  }),
  count: jest.fn(),
};