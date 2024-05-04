const { Router } = require("express");
require("dotenv").config;
const router = Router();
const { VideoGames, Genres } = require("../db");
const { dataGenres } = require("../data/dataGenres");

router.post("/", async (req, res) => {
  try {
    // Obtener los nombres de los géneros disponibles
    const apiGenres = await dataGenres();
    const count = await Genres.count();
    if (count === 0) {
      await Genres.bulkCreate(apiGenres);
    }
    const {
      name,
      descripcion,
      platForms,
      imagen,
      releasedDate,
      rating,
      genres,
    } = req.body;

    if (!genres || genres.length < 1) {
      return res.status(400).json({
        error:
          "Debe proporcionar al menos 1 género para registrar tu videojuego.",
      });
    }

    const newVideoGame = await VideoGames.create({
      name,
      descripcion,
      platForms,
      imagen,
      releasedDate,
      rating,
    });
    await Promise.all(
      genres.map(async (genreName) => {
        const [genre, created] = await Genres.findOrCreate({
          where: { name: genreName },
        });
        return newVideoGame.addGenre(genre);
      })
    );

    res.status(201).json({
      newVideoGame,
      genres,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
