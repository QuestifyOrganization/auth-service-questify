const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken');
const AuthError = require('../exceptions/authError');
const jwtConfig = require('../config/jwtConfig');

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

            const { id, name } = user;

            const token = jwt.sign({ id, name, username }, jwtConfig.auth.secret, {
                expiresIn: jwtConfig.auth.expiresIn,
            });

            const decodedToken = jwt.verify(token, jwtConfig.auth.secret);
            console.log

            return {
                user: {
                    id,
                    name,
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