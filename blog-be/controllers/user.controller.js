const jwt = require("jsonwebtoken");
const validator = require("validator");
const bcrypt = require("bcrypt");
const db = require("../models");

const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!username || !password || !email) {
      return res
        .status(400)
        .json({ status: "error", msg: "please provide compelete data" });
    } else if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ status: "error", msg: "invalid email address" });
    } else if (!validator.isStrongPassword(password)) {
      return res
        .status(400)
        .json({ status: "error", msg: "password must be strong" });
    } else if (!validator.isAlphanumeric(username)) {
      return res
        .status(400)
        .json({ status: "error", msg: "username is alphanumeric" });
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    await db.user.create({ email, username, password: encryptedPassword });

    return res
      .status(200)
      .json({ status: "success", msg: "user registered success" });
  } catch (error) {}
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "error", msg: "please provide compelete data" });
    }
    let user = await db.user.findOne({ where: { email } });
    
    if (!user) {
      return res
        .status(400)
        .json({ status: "error", msg: "email not exist" });
    }
    const {username} = user.toJSON()

    const isCompared = await bcrypt.compare(password, user.password)

    if(!isCompared){
              return res
        .status(400)
        .json({ status: "error", msg: "incorrect password" });

    }

    const token = jwt.sign({email,role} ,"secretkey" ,{expiresIn : '1d'})

    res.status(200).json({status:"success",data :{ token , email , username }})


    
  } catch (error) {}
};

module.exports = { register , login};
