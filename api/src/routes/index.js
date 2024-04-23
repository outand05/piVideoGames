const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getApi = require('./getApi')
const getGende = require('./getGenre')
const getApiId = require('./getApiID')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/api',getApi)
router.use('/genres',getGende)
router.use('/Game',getApiId)



module.exports = router;
