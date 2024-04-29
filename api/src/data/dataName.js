require("dotenv").config();
const { API_KEY, API_URL_NAME } = process.env;
const axios = require("axios");

async function dataApiName(name) {
  console.log("Nombre recibido:", name);
  try {
    const response = await axios.get(API_URL_NAME, {
      params: { key: API_KEY, search: name },
    });
   
    return response.data.results
  } catch (error) {
    throw error;
  }
}
module.exports = { dataApiName };
