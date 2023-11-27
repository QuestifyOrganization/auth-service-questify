const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken');
const AuthError = require('../exceptions/authError');
const config = require('../config/jwtConfig');

class AuthService {

    async signIn(username, password) {
        try {
            const user = await UserModel.findOne({
                username,
                password,
            });

            if (!user) {
                throw new AuthError('Invalid credentials');
            }

            const { id } = user;

            const token = jwt.sign({ id }, config.auth.secret, {
                expiresIn: config.auth.expiresIn,
            });

            return {
                user: {
                    id,
                    username,
                },
                token,
            };
        } catch (error) {
            throw new AuthError('Authentication failed');
        }
    }

    async validateToken(token) {
        try {
            
            const decoded = jwt.verify(token, config.auth.secret);
    
            return decoded.id;
        } catch (error) {
            throw new AuthError('Invalid token');
        }
    }
    
}

module.exports = new AuthService();