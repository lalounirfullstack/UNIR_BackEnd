const Inmueble = require("../dbmodels/inmueble.model");

const selectInmuebles = async () =>{
    return Inmueble.find({});
}

//db.inmuebles.find()

const selectInmuebleById = (inmuebleId) =>{
    return Inmueble.findById(inmuebleId)
}

// db.inmuebles.find({"_id":ObjectId('65288d3bb8eb0a52431cbe05')})

const insertInmueble = (body) =>{
 return Inmueble.create(body);
}

const updateInmuebleById = (inmuebleId, body) =>{
    return Inmueble.findByIdAndUpdate(inmuebleId, body, {new: true});
}

const deleteInmuebleById = (inmuebleId)=>{
    return Inmueble.findByIdAndDelete(inmuebleId);
}

module.exports = { selectInmuebles, selectInmuebleById, insertInmueble, updateInmuebleById, deleteInmuebleById  }