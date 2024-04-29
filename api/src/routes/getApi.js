require("dotenv").config();
const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { API_KEY, API_URL } = process.env;

// 📍 GET | /videogames
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
      },
    });
    const detailResults = response.data.results.map(game => {
      return {
        name: game.name,
        description: [game.updated,game.genres],
        platforms: game.parent_platforms,
        image: game.background_image,
        releasedDate: game.released,
        rating: game.rating
      };
    });

    res.status(201).json(detailResults)
  } catch (error) {
    console.error("Error:", error);

    res.status(500).send("Error interno del servidor");
  }
});
module.exports = router;
// 📍 GET | /videogames/name?="..."
// Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el videojuego, debe mostrar un mensaje adecuado.
// Debe buscar tanto los de la API como los de la base de datos.
// 📍 POST | /videogames
// Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
