require("dotenv").config()
const express = require("express")
const db= require("./db/connect.js")
import cors from "cors"

// import route
const employeesRoutes = require("./routes/employee.route.js")

const app = express()

app.get(("/"),(req,res)=>{
    res.send("Helloo world❤️")
})
 

// import connection
db()
app.use(cors())

// middleware
app.use(express.json())
app.use("/api",employeesRoutes)


const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`App started ${PORT}❤️ `);
})