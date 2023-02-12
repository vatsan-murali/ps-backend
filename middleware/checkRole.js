const User = require("../models/userSchema");
const allowedRoles = ["admin", "user"];

 const checkRole = async(req, res, next) => {
    try {
      const { username } = req.body;
      const user = await User.findOne({ username });
      if (!allowedRoles.includes(user.role)) {
        
      } else {
        if (user.role === "admin") {
          req.nav = '/AdminView'
        } else {
          req.nav = '/'
        }
      }
    } catch (e) {
      console.log(e);
    }
    next();
  }

module.exports = checkRole