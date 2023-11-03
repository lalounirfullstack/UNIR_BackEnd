const mongoose = require('mongoose');

const inmuebleSchema = mongoose.Schema(
    {
        piso:
            {
                type: String,
                required: ["Ingrese Piso"]
            },
        letra:
            {
                type: String,
                required:false
            },
        extension:
            {
                type: Number,
                required:false
            },
        habitaciones:
            {
                type: Number,
                required: false,
                default: 1
            },
        alquilado:
            {
                type: Boolean,
                required: false,
                default:false
            },
        propietario:
            {
                type: String,
                required: false
            },
        mailContacto:
            {
                type: String,
                required:false
            }
    },
    {
        versionKey:false,
        timestamps: true
    }
)

//Create Model
const Inmueble = mongoose.model('Inmueble', inmuebleSchema);

module.exports = Inmueble;