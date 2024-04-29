// 📍 GET | /videogames/name?="..."
// Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el videojuego, debe mostrar un mensaje adecuado.
// Debe buscar tanto los de la API como los de la base de datos.
const { Router } = require("express");
const {dataApiName} = require('../data/dataName')
const router = Router();
router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const dataName = await dataApiName(name)
    // if (!dataName.results || dataName.results.length === 0) {
    //   return res.status(404).json({ error: "No se encontraron resultados para el videogame" });
    // }
    const filterData = dataName.slice(0, 15)
    res.status(200).json(filterData)
  } catch (error) {
    res.status(500).json({ error: "Hubo un problema al obtener el videogame" });
  }
});
module.exports = router;
