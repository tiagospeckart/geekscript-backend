import request from 'supertest';
import App from '../../../src/infra/api/API';
import CategoryMock from '../../__mocks__/Category.mock';

jest.mock('../../__mocks__/Category.mock');

describe('CategoryController', () => {
  beforeEach(() => {
    // Clear the data in the mocked Category model before each test
    (CategoryMock as any).__resetData();
  });

  it('should create a new category', async () => {
    const response = await request(App)
      .post('/category')
      .send({ name: 'TestCategory' });
  
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id_category');
    expect(response.body.name).toBe('TestCategory');
  });
  
  it('should return a list of categories', async () => {
    // Add some mocked data
    await (CategoryMock as any).__addMockData({ id_category: 1, name: 'TestCategory1' });
    await (CategoryMock as any).__addMockData({ id_category: 2, name: 'TestCategory2' });
  
    const response = await request(App).get('/category');
  
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBe(2);
  });
});