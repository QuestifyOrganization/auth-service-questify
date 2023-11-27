const request = require('./appSupertest');

describe('User Creation for Authentication Test', () => {
  it('should create a user with random data', async () => {
    const randomUserData = {
      username: `user_${Math.random().toString(36).substring(7)}`,
      name: `name_${Math.random().toString(36).substring(7)}`,
      password: Math.random().toString(36).substring(7)
    };

    const createUserResponse = await request.post('/api/user/create').send(randomUserData);
    expect(createUserResponse.statusCode).toBe(201); 
  });
});
