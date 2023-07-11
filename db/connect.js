const mongoose = require("mongoose")

db = async()=>{
    try{
      await mongoose.connect(process.env.MONGO_URL)
    }catch(err){
     console.log("Error occured",err);
    }
}

module.exports= db