const  InmuebleController = require("../controllers/inmueble.controller");

const router = require('express').Router();

router.get('/', InmuebleController.getInmuebles);
router.get('/:id', InmuebleController.getInmuebleById);
router.post('/', InmuebleController.createInmueble);
router.put('/:id', InmuebleController.updateInmueble);
router.delete('/:id', InmuebleController.deleteInmueble);

module.exports= router;