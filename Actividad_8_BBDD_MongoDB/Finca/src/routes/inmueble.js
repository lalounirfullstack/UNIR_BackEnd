const  InmuebleController = require("../controllers/inmueble.controller");
const  Middleware = require('../middlewares/inmuebles.middleware')

const router = require('express').Router();

router.get('/', InmuebleController.getInmuebles);
router.get('/:inmuebleId', Middleware.checkInmuebleId,InmuebleController.getInmuebleById);
router.post('/', InmuebleController.createInmueble);
router.put('/:inmuebleId', Middleware.checkInmuebleId, InmuebleController.updateInmueble);
router.delete('/:inmuebleId', Middleware.checkInmuebleId, InmuebleController.deleteInmueble);

module.exports= router;