const jwt = require('jsonwebtoken');
const { decode } = require('node:punycode');

const authenticationMW = (req,res,next)=>{

   let token  = req.headers.authorization || req.header.Authorization;  

   if(!token){     
     return res.status(401).json({status :'error',msg :"jwt token required"})
   }
   //bearer ---------------------    
   token = token.split(' ')[1]

   jwt.verify(token, "secretkey",(err,decoded)=>{

        if(err){
            return res.status(401).json({msg :err.message })
        }

        req.email = decoded.email
        req.role = decoded.role
        next()

   });

}

module.exports = authenticationMW


