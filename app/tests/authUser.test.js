const request = require('./appSupertest');

describe('Authentication Test', () => {
  it('should authenticate a newly created user', async () => {

    const randomUserData = {
        username: `user_${Math.random().toString(36).substring(7)}`,
        name: `name_${Math.random().toString(36).substring(7)}`,
        password: Math.random().toString(36).substring(7)
      };
  
    await request.post('/api/user/create').send(randomUserData);
  
    const response = await request.post('/api/auth/sign-in').send({
      username: randomUserData.username,
      password: randomUserData.password
    });

    expect(response.statusCode).toBe(200); 
  });
});
