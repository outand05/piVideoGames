const { dataGenres } = require("../data/dataGenres");

const { Router } = require("express");
const { Genres } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const count = await Genres.count();

    if (count === 0) {
      const response = await dataGenres();

      await Genres.bulkCreate(response);

      res.status(201).send({
        message: "Géneros guardados exitosamente en la base de datos",
      });
    } else {
      res.status(200).send({ message: "La base de datos ya contiene géneros" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error interno del servidor");
  }
});

module.exports = router;
