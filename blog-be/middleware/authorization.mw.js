
const authorizationMW = (...allowedRoles) => (req ,res ,next ) =>{

    allowedRoles.forEach( role => {
        if(req.role == role){

            next()

        }
    })

    return res.status(200).json({msg :"Unauthorized"})

}

module.exports = {authorizationMW}