//const InmuebleModel = require('../models/inmueble.model');
const InmuebleModel = require('../dbModels/inmueble.model') ;

const checkInmuebleId = async (req, res, next)=>{
    //Comprobar si el valor de Prodct ID de los parameter es un ID Correcto
    const  { inmuebleId } = req.params;
    console.log(`InmuebleID Middleware: ${inmuebleId}`)

    try{
        const product = await InmuebleModel.findById(inmuebleId);
        if(!product){
            return res.json({
                fatal: 'Inmueble does not exist !'
            })
        }
        next();
    }catch(error){
        res.json({
            fatal: error.message
        })
    }
}

module.exports = { checkInmuebleId }