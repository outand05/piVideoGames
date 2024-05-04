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

   
    const dbResults = await searchDatabase(name);

   
    if (dbResults.length > 0) {
      return res.status(200).json(dbResults);
    }

    
    const apiResults = await dataApiName(name);


    if (!apiResults || apiResults.length === 0) {
      return res
        .status(404)
        .json({ error: "No se encontraron resultados para el videojuego" });
    }

  
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
