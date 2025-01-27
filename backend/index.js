const express=require("express")
const cors=require("cors")
const {connectDB}=require("./connection")
const authRoute=require("./routes/auth")

const PORT=8000
const app=express()
connectDB("mongodb://localhost:27017/project")


app
.use(express.urlencoded({extended:false}))
.use(express.json())
.use(cors())
.use("/api/auth",authRoute)
.listen(PORT,()=>{console.log(`Connected on PORT-${PORT}`)})