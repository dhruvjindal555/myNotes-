const mongoose = require('mongoose')

const mongoURI = 'mongodb://localhost:27017/mynotes'
const connectToMongo = async () => {
    try{
        await mongoose.connect(mongoURI).then(()=>{
            console.log("Successfully connected to MongoDB")
            
        })
    }catch(err){
        console.log("err")
    }
}

module.exports = connectToMongo;