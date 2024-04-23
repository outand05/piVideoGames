require("dotenv").config();
const { Router } = require("express");
const Genres =  require("../db"); // Importa tu modelo de género
const router = Router()
const axios = require("axios");

const { API_KEY } = process.env;

// Ruta para guardar los géneros desde la API a la base de datos
router.get("/", async (req, res) => {
  try {
    // Verificar si la colección de géneros está vacía
    

    // Si la colección está vacía, obtiene y guarda los géneros desde la API
   
      // Hacer una solicitud a la API para obtener los géneros
      const response = await axios.get("https://api.rawg.io/api/genres", {
        params: {
          key: API_KEY,
        },
      });

      // Extraer los géneros de la respuesta
      const genres = response.data.results.map(genre => genre.name)

      res.status(201).json(genres);
    
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error interno del servidor");
  }
})
module.exports = router;
// genresArray.forEach(genre => {
//     console.log(genre.name);
//   })