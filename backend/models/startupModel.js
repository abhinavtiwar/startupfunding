const {Schema , model} = require("../connection");

const schema = new Schema({
    title:String,
    description:String,
    Email:String,
    thumbnail:String,
    year:Number,
    teamInfo:Object,
    details:Array,
    createdAt:Date,
})
 
module.exports=model("startup",schema);