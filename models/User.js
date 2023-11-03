const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username : {type: String , required:true},
    email : {type : String, required: true, unique: true},
    uid : {type : String, required : true, unique: true},
    password : {type: String, required : true},
    address : {type : Array, required : false},
    phone : {type : String, required : false},
    userType : {type: String, required: true, default : "client", enum: ['Admin', 'Vendor', 'Driver', 'Client']},
    profile : {
        type : String,
        required : true,
        default : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    }

},{timestamps : true});

module.exports = mongoose.model('User', UserSchema)