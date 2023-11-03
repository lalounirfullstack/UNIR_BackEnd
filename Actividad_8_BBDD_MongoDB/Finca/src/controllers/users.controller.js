const UserModel = require('../dbmodels/user.model');
const bcrypt = require('bcryptjs')

const register = async (req, res) =>{
    try{
        //Add Encrypted data/ Salt - numero de veces que haces encriptacion
        req.body.password = bcrypt.hashSync(req.body.password, 8);

        const user = await UserModel.create(req.body);
        res.json(user);

    }catch(error){
        res.json({
            fatal: error.message
        })
    }
}


const login = async (req, res) =>{
    try{
        const {email, password } = req.body
        const user = await UserModel.findOne({email: email}) //Uno usuareo cuyo emial sea igual al Email que pasas como parametro.
        if(!user){
            return res.json({fatal: 'Error en Email o Password'})
        }
        const equals = bcrypt.compareSync(password, user.password);
        if(!equals){
            return res.json({fatal: 'Error en Email o Password'})
        }
        res.json('Login Successfully !')

    }catch(error){
        res.json({
            fatal: error.message

        })
    }
}

module.exports = { login, register }