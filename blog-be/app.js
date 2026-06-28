const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/user.route')
const authenticationMW = require('./middleware/authentication.mw')
const { authorizationMW } = require('./middleware/authorization.mw')
const app = express()


app.use(cors('*'))
app.use(express.json())
app.use('/api/v1/user',userRoutes)

// protected user => valid token and role => 'admin'
app.use('/api/v1/admin',authenticationMW ,authorizationMW('admin') ,  (req,res)=>{

    res.status(200).json({msg:"admin route accessed"})

} )



module.exports = app