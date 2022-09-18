const {Schema , model} = require("../connection");

const schema = new Schema({
    title:String,
    name:String,
    description:String,
    email:String,
    password:String,
    thumbnail:String,
    year:Number,
    phone:Number,
    teamInfo:Object,
    details:Array,
    createdAt:Date,
})
 
module.exports=model("startup",schema);