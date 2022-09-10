const {Schema , model} = require("../connection");

const schema=new Schema({
    fname:String,
    lname:String,
    Email:String,
    contact:String,
    age:String,
    password:String,
    aadhar:String,
    createdAt:Date,
    approved:{type:Boolean,default:false},

   
   

})

module.exports=model("investor",schema);