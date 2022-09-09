const {Schema , model} = require("../connection");

const schema=new Schema({
    fname:String,
    lname:String,
    email:String,
    contact:String,
    password:String,
    
    
   

})

module.exports=model("admin",schema);