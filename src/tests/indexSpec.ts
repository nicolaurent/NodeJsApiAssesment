import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('Home Page endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});
