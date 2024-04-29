require("dotenv").config();
const { API_KEY, API_URL_GENRES } = process.env;
const axios = require("axios");


async function dataGenres() {
  try {
    const response = await axios.get(API_URL_GENRES, {
      params: {
        key: API_KEY,
      },
    });
    const genresAPI = response.data.results.map(genre => ({
        name: genre.name,
    }));
    

    return genresAPI;
  } catch (error) {
    throw error;
  }
}

module.exports = { dataGenres };
