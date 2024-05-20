
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: String,
    qualification: String,
    contact: String,
    city: String,
    image_url:String,
    
});

module.exports = mongoose.model('Doctor', doctorSchema);