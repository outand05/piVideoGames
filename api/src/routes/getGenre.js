require("dotenv").config();
const { Router } = require("express");
const {Genres} = require("../db"); // Importa tu modelo de género
const router = Router();
const axios = require("axios");

const { API_KEY } = process.env;

// Ruta para guardar los géneros desde la API a la base de datos
router.get("/", async (req, res) => {
    try {
        // Verificar si la colección de géneros está vacía
        const count = await Genres.count();
    
        if (count === 0) {
          // Si la colección está vacía, obtiene y guarda los géneros desde la API
          const response = await axios.get("https://api.rawg.io/api/genres", {
            params: {
              key: API_KEY,
            },
          });
    
          // Extraer los géneros de la respuesta
          const genresFromAPI = response.data.results.map(genre => ({
            name: genre.name,
          }));
    
          // Guardar los géneros en la base de datos
          await Genres.bulkCreate(genresFromAPI);
    
          res.status(201).send({ message: "Géneros guardados exitosamente en la base de datos" });
        } else {
          // Si la colección no está vacía, enviar un mensaje indicando que ya contiene géneros
          res.status(200).send({ message: "La base de datos ya contiene géneros" });
        }
      } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error interno del servidor");
      }
    });
    
    module.exports = router;
