const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email : String,
    password: String,
    contact: Number,
    fieldOfInterest:String,
    createdDate:{
        type: Date,
        default:Date.now
    }

});
module.exports = mongoose.model('Users',userSchema);