require("dotenv").config();
const app = require("./app");
const sequelize = require("./config/db.config");
const db = require("./models");

let port = process.env.PORT || 8000;

(async()=>{
  
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await db.user.sync({force :false})
    console.log('user table created');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();


app.listen(port, (err) => {
  err
    ? console.log(`server start error : ${err.message}`)
    : console.log(`server is up at port : ${port}`);
});
