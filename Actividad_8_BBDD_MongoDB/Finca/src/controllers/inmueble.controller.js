//const InmuebleModel = require('../model/inmueble.model')
const InmuebleModel = require('../model/inmueble.model')

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
        const id = req.params.id;
        console.log(`Param ID: ${id}`);
        const inmueble = await InmuebleModel.selectInmuebleById(id);
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
        const id = req.params.id;
        const inmueble = await InmuebleModel.updateInmuebleById(id, req.body);
        if(!inmueble){
            return res.status(404).json({message: `Inmueble ${inmueble} cannot be found !`});
        }else {
            const updatedInmueble = await InmuebleModel.selectInmuebleById(id);
            res.json(updatedInmueble)
        }
    }catch(error){
      console.log(`Error: ${error.message}`)
      res.status(500).json({message: error.message})
    }
}

const deleteInmueble = async (req, res) =>{
   try{
      const id = req.params.id;
      const inmueble = await InmuebleModel.deleteInmuebleById(id);
      if(!inmueble){
        return res.status(404).json({message: `Inmueble ${inmueble} cannot be found`});
      }
      res.json(inmueble);
    }catch(error){
      console.log(`Error: ${error.message}`)
      res.status(500).json({message: error.message})
    }
}

module.exports = {getInmuebles, getInmuebleById, createInmueble, updateInmueble, deleteInmueble}