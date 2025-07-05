import axios from 'axios';

export const getChatData = async (page = 0) => {
  try {
    const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    return { chats: [] };
  }
};
