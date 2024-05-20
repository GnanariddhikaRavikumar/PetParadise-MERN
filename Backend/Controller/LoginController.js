const Signupmodel = require("../Models/Signup");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.login =(req,res) => {

    const {username, password}= req.body;

    Signupmodel.findOne({username}).then(data =>{
        if(!data){
            return res.status(404).json({message : "Username doesnot registered"});
        }

        let isvalidpassword = bcrypt.compareSync(password,data.password);

        if(!isvalidpassword){
            res.status(401).send({message: "Invalid Password"});
        }
        
        let token=jwt.sign({id:data._id},  "key");
        res.status(200).send({
            user:{
                id:data._id,
                username:data.username,
            },
            accessToken:token
        });
        
    })
    .catch(err =>{
        res.status(500).send({message:"Server not running",err});
    });
   
}; 


