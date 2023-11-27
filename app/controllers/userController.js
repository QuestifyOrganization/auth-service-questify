const BaseCrudController = require('./baseCrudController');
const UserModel = require('../models/userModel'); 

class UserController extends BaseCrudController {
}

module.exports = new UserController(UserModel);