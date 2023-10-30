const Inmueble = require("../dbModels/inmueble.model");

const selectInmuebles = async () =>{
    return Inmueble.find({});
}

//db.inmuebles.find()

const selectInmuebleById = (id) =>{
    return Inmueble.findById(id)
}

// db.inmuebles.find({"_id":ObjectId('65288d3bb8eb0a52431cbe05')})

const insertInmueble = (body) =>{
 return Inmueble.create(body);
}

const updateInmuebleById = (id, body) =>{
    return Inmueble.findByIdAndUpdate(id, body);
}

const deleteInmuebleById = (id)=>{
    return Inmueble.findByIdAndDelete(id);
}

module.exports = { selectInmuebles, selectInmuebleById, insertInmueble, updateInmuebleById, deleteInmuebleById  }