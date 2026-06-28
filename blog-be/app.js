const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/user.route')
const app = express()


app.use(cors('*'))
app.use(express.json())
app.use('/api/v1/user',userRoutes)



module.exports = app