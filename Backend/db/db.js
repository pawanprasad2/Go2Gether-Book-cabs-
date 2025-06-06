const mongoose =require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(()=>{
        console.log("connected to MongoDB")
    })
    .catch((error)=>{
        console.error("mongoDB connection error",error)
        process.exit(1) //exit process if connection fails
    })
}

module.exports= connectToDb