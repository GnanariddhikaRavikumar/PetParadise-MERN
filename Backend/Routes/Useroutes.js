const loginuser = require("../Controller/LoginController");
const signupuser = require("../Controller/SignupController")
const verifyToken = require("../Middleware/VerifyToken");

module.exports =(app) =>{
    app.post("/petparadise/login",loginuser.login);
    app.post("/petparadise/signup",signupuser.signup);
}