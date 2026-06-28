const sequelize = require("../config/db.config");


const db = {}

db.user = require('./user.model.js')(sequelize);  



module.exports= db