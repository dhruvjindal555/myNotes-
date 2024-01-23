const mongoose = require('mongoose')
// require('dotenv').config()
const mongoURL = process.env.MONGO_URL

const connectToMongo = async () => {
    try{
        await mongoose.connect(mongoURL).then(()=>{
            console.log("Successfully connected to MongoDB")
            
        })
    }catch(err){
        console.log(err)
        console.log("err")
    }
}

module.exports = connectToMongo;