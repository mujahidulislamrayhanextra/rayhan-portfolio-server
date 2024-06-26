import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({



 name:{
    type:String,
    require:true
 },
 email:{
    type:String,
    require:true
 },
 sub:{
    type:String,
    require:true
 },
 message:{
    type:String,
    require:true
 }






})

export default mongoose.model("Message",messageSchema);