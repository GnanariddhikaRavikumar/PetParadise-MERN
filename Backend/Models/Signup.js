const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema definition
const Signupdetail = new Schema({
    username:{
        type: String,
        required: true,
        unique :[true,"Username already exsists"]
    },
    firstname:String,
    lastname:String,
    
    password:
    {
        type:String,
        required: true,
        
    }
})

//creating model
const Signupmodel = mongoose.model("Signupdetail",Signupdetail);

//exporting the model
module.exports= Signupmodel;