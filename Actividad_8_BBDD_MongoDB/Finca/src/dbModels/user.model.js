const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String
},
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = model('user', userSchema);