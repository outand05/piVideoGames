const { Router } = require("express");
const router = Router();
const { VideoGames, Genres } = require("../db");
const { apiDataId } = require("../data/apiDataId.js");

router.get("/:idVideogame", async (req, res) => {
  const { idVideogame } = req.params;
  try {
    // Verificar si el ID es un UUID
    const isUUID = idVideogame.match(
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
    );

    const videoGame = isUUID
      ? await VideoGames.findByPk(idVideogame, { include: Genres })
      : await apiDataId(idVideogame);

    if (videoGame) {
      res.status(200).json(videoGame);
    } else {
      res.status(404).json({ error: "El juego no existe" });
    }
  } catch (error) {
    res.status(500).json({ error: "Hubo un problema al obtener el juego" });
  }
});
module.exports = router;
