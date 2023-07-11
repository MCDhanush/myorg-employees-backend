const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    designation:{
        type:String,
        required:true,
        trim:true
    },
    mobileNumber:{
        type:Number,
        required:true,
        trim:true,
        unique:true
    },
    bloodGroup:{
        type:String,
        required:true,
    },

})

module.exports = mongoose.model("employees",employeeSchema)