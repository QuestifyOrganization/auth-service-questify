const axios = require('axios');
const env = process.env;

const chatServiceUrl = `${env.API_CHAT_BASE_URL}/api/chat-user/create`;

async function createChatUserInChatService(user) {
    try {
        const chatUserData = {
            username: user.username, 
            name: user.name,         
            userId: user.id      
        }
        const response = await axios.post(chatServiceUrl, chatUserData);

        if (response.status === 200) {
            console.log('Chat user successfully created in the ChatService');
            return true;
        } else {
            console.log('Failed to create chat user in the ChatService');
            return false;
        }
    } catch (error) {
        console.error('Error making request to the ChatService');
        return false;
    }
}

module.exports = { createChatUserInChatService };
