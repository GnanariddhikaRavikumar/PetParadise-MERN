const express = require("express");
const dotenv = require("dotenv"); 
const DBconnect = require("./Config/DbConnection");
const bodyParser = require('body-parser');
const Doctor = require("./Models/Doctor.js");
const cors = require('cors');
dotenv.config({});

const app =express();
const PORT= process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));
app.use(cors());

require("./Routes/Useroutes.js")(app);

app.get("/doctors",async(req,res)=>{
    const doctors= await Doctor.find({})
    console.log(doctors);
    res.json(doctors);
})

app.listen(PORT, ()=>{ 
    DBconnect();
    console.log(`Server listen at port ${PORT}`);
});