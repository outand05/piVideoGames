require("dotenv").config();
const { API_KEY } = process.env;

const axios = require("axios");

async function apiDataId(id) {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${id}`, {
      params: {
        key: API_KEY,
      },
    });
    const { data } = response;
    const apiData = {
        id: data.id,
        name: data.name,
        description: data.description,
        platforms: data.parent_platforms,
        image: data.background_image,
        releasedDate: data.released,
        rating: data.rating
      };
      return apiData;
  } catch (error) {
    throw error;
  }
}

module.exports = { apiDataId };
