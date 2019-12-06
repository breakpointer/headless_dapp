const request = require('supertest');
const api = require('../src/app');

describe('API root path \/', () => {
  test('It should greet you with a GET', async() => {
    const response = await request(api).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual('Hello World!');
  });
});
