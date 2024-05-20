const jwt = require("jsonwebtoken");
const userModel = require('../Models/Signup');

const verifyToken = (req, res, next) => {
    //   console.log("req", req.headers.authorization.split(" ")[1]);
    if (
      req.headers &&
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "JWT"
    ) {
      jwt.verify(
        req.headers.authorization.split(" ")[1],
        "key",
        function (err, verifiedToken) {
          //console.log("err", err);
          //console.log("verified Token", verifiedToken);
          if (err) {
            res.status(401).json({ message: "Invalid JWT Token" });
          }
  
          userModel
            .findById(verifiedToken._id)
            .then((user) => {
              req.user = user;
              next();
            })
            .catch((err) =>
              res.status(500).json({ messsage: "server not available" })
            );
        }
      );
    } else {
      res.status(403).json({ message: "token not present" });
    }
  };
  
  module.exports = verifyToken;