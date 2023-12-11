const BaseCrudController = require('./baseCrudController');
const UserModel = require('../models/userModel');
const { createChatUserInChatService } = require('../services/frontierService');
const env = process.env;

class UserController extends BaseCrudController {
    
    async createRecord(req, res, recordData = null) {
        try {
          const newRecord = new this.model(recordData || req.body);
          const savedRecord = await newRecord.save();

          await createChatUserInChatService(savedRecord);
          return res.status(201).json(savedRecord);
        } catch (error) {
          console.error('Error creating record:', error);
          return res.status(500).json({ error: 'Internal server error' });
        }
    }
      
}

module.exports = new UserController(UserModel);