const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getApi = require("./getApi");
const getGende = require("./getGenre");
const getApiId = require("./getApiID");
const postNewGame = require("./postNewGame");
const getName = require('./getName')
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/api", getApi);
router.use("/genres", getGende);
router.use("/game", getApiId);
router.use("/newVideoGame", postNewGame);
router.use("/search", getName);

module.exports = router;
