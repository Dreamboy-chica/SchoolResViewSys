let mongoose=require("mongoose")
let ressch=new mongoose.Schema({
    "_id":Number,
    "name":String,
    "phno":String,
    "dept":String,
    "gen":String,
    "marks":Number
})
let rm=mongoose.model("result",ressch)
module.exports=rm