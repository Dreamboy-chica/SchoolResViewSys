let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
const route = require("./routes/route")
let app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/vectorindia").then(()=>{
    console.log("Database has been connected...")
})
app.use("/",route)
app.listen(5000,()=>{
    console.log("Server has been started...")
})