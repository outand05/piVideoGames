const { Router } = require("express");
const router = Router();
const { dataApiName } = require("../data/dataName");
const { searchDatabase } = require("../data/dataSearch");

router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    if (!name) {
      return res
        .status(400)
        .json({ error: "Debe proporcionar un nombre para buscar." });
    }

    // Buscar en la base de datos
    const dbResults = await searchDatabase(name);

    // Si se encontraron resultados en la base de datos, devolverlos
    if (dbResults.length > 0) {
      return res.status(200).json(dbResults);
    }

    // Si no se encontraron resultados en la base de datos, buscar en la API
    const apiResults = await dataApiName(name);

    // Verificar si se encontraron resultados en la API
    if (!apiResults || apiResults.length === 0) {
      return res
        .status(404)
        .json({ error: "No se encontraron resultados para el videojuego" });
    }

    // Devolver los resultados encontrados en la API
    const filteredApiResults = apiResults.slice(0, 15);
    res.status(200).json(filteredApiResults);
  } catch (error) {
    console.error("Error al obtener el videojuego:", error);
    res
      .status(500)
      .json({ error: "Hubo un problema al obtener el videojuego" });
  }
});

module.exports = router;
