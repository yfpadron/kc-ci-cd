const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('Debería responder con un status 200 y el mensaje correcto', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hola, Bootcamp! CI/CD funcionando.');
  });
});