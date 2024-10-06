const rm = require("../model/resmodel")

let add=async(req,res)=>{
    try{
        let data=new rm(req.body)
        await data.save()
        res.json({"msg":"results added"})

    }
    catch(err)
    {
        res.json({"err":"error in storing"})
    }

}
let getres=async(req,res)=>{
    try{
     let obj= await rm.findById({"_id":req.params.hno})
     res.json(obj)

    }
    catch(err)
    {

    }

}
let getdata=async(req,res)=>{
    try{
        let data=await rm.find()
        res.json(data)

    }
    catch(err)
    {

    }

}
let sortdata=async(req,res)=>{
    try
    {
        let data=await rm.aggregate([{$sort:{[req.params.fname]:1}}])
        res.json(data)

    }
    catch(err)
    {

    }

}

let upd=async(req,res)=>{
    try{
     
        await rm.findByIdAndUpdate({"_id":req.body._id},req.body)
        res.json({"msg":"results updated"})

    }
    catch(err)
    {
        res.json({"err":"error in updation"})
    }

}
let del=async(req,res)=>{
    try{
        await rm.deleteMany({"_id":{$in:req.body.ids}})
        res.json({"msg":"del done"})
    }
    catch(err)
    {
        res.json({"err":"error in del"})
    }
}
module.exports={add,getres,getdata,sortdata,upd,del}