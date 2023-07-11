const express  = require("express")
const Employees = require("../models/employess.models.js")
const  router = express.Router()

router.get("/employees",(req,res)=>{
    try{
       Employees.find((err,data)=>{
       if(err){
        // console.log(err)
        return res.status(400).send({message:"Error occured on ur api"})
       }
       res.status(200).send(data)
       })
}catch(error){
    console.log(error);
     res.status(500).send({message:'Internal server Error'})
    }

})

router.get("/employees/:id",(req,res)=>{
    try{
       Employees.findOne({_id:req.params.id},(err,data)=>{
       if(err){
        // console.log(err)
        return res.status(400).send({message:"Error occured on ur api"})
       }
       res.status(200).send(data)
       })
}catch(error){
    console.log(error);
     res.status(500).send({message:'Internal server Error'})
    }

})

router.post("/employees", async (req,res)=>{
try{
const payload= req.body
const newEmployees = new Employees(payload)
await newEmployees.save((err,data)=>{
    if(err){
        return res.status(400).send({message:"Error occured on ur api"})
    }
    res.status(200).send({employeesId : data._id,message :"Employee added succefully"})
})
}catch(err){
console.log(err)
res.status(500).send({message:"Internal server error"})
}
})

router.put("/employees/:id",(req,res)=>{
    try{
        Employees.findByIdAndUpdate({_id:req.params.id},{$set: req.body},(err,data)=>{
            if(err){
                return res.status(400).send({message:"Error occured"})
            }
            res.status(201).send({employeesId:data._id,message:"successfully edited"})
        })

    }catch(err){
    res.status(500).send({message:"Internal server error"})
    }
})

router.delete("/employees/:id",(req,res)=>{
    try{
        Employees.deleteOne({_id:req.params.id},(err,data)=>{
        if(err){
           return res.status(404).send({message:"error ocuured"})
        }
      res.status(200).send({message:"deleted successfully"})
    })
    }catch(err){
    res.status(500).send({message:"internal servor error"})
    }
})

module.exports = router