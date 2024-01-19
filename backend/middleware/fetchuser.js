const jwt = require('jsonwebtoken');
const JWT_SECRET = "dhruvismyname"

const getuser =(req,res,next)=>{
    const token = req.header('auth-token')
    if(!token){
        res.status(401).send("Some error occured")
    }
    try{
        const data = jwt.verify(token,JWT_SECRET)
        req.user = data.user
        next();
    }catch(err){
        console.log(err.message)
        res.status(401).send("Some error occured")
    }

}
module.exports = getuser