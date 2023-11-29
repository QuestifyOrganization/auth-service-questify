const mongoose = require('../services/databaseService'); 

describe('MongoDB Connection Test', () => {

  it('successfully connects to MongoDB', async () => {
    await mongoose.connect();
    const connectionState = mongoose.connection.readyState;
    expect(connectionState).toBe(1);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

});
