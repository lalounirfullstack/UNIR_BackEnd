//const InmuebleModel = require('../models/inmueble.models')
const InmuebleModel = require('../models/inmueble.model')

const getInmuebles = async (req, res)=>{
    try{
        const result = await InmuebleModel.selectInmuebles();
        console.log(`Retrieved All Inmueble Records: \n ${result}`);
        res.json(result);
    }catch(error){
        res.json({
            fatal: `Error: ${error.message}`
        })
    }
}

const getInmuebleById = async (req, res) =>{
    try{
        const { inmuebleId } = req.params
        console.log(`Param ID: ${inmuebleId}`);
        const inmueble = await InmuebleModel.selectInmuebleById(inmuebleId);
        res.json(inmueble);
    }catch(error){
        res.json({
            fatal: `Error: ${error.message}`
        })
    }
}

const createInmueble = async (req, res)=>{
    try{
        const inmueble = await InmuebleModel.insertInmueble(req.body);
        res.json(inmueble)
    }catch(error){
        res.json({
            fatal: `Error: ${error.message}`
        })
    }
}

const updateInmueble = async (req, res)=>{
    try{
        const { inmuebleId } = req.params;
        console.log(inmuebleId);
        const result = await InmuebleModel.updateInmuebleById(inmuebleId, req.body);
        res.json(result)
    }catch(error) {
        res.json({
            fatal: error.message
        })
    }
}

const deleteInmueble = async (req, res) =>{
   try{
      const { inmuebleId } = req.params;
       console.log(inmuebleId);
      const inmueble = await InmuebleModel.deleteInmuebleById(inmuebleId);
      res.json(inmueble);
    }catch(error){
      console.log(`Error: ${error.message}`)
      res.status(500).json({message: error.message})
    }
}

module.exports = {getInmuebles, getInmuebleById, createInmueble, updateInmueble, deleteInmueble}