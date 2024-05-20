const Signupmodel=require('../Models/Signup');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signup =(req,res) =>{
    const {
        username,
        firstname,
        lastname,
        password
    } = req.body 

    //create a new row
    const newuser = new Signupmodel({
        username, firstname, lastname, 
        password : bcrypt.hashSync(password, 10),
    });

    Signupmodel.findOne({username}).then((data) => {
        if(data){      
            return res.status(400).send({message: "Username already exsist"});
        }
        else{
            newuser.save() . then(data =>{
                res.status(200).send({message: "Data saved successfully"});
            });
        }
    })
    .catch(err =>{
        return res.status(500).send({message : "Some error occured"});
    });
};