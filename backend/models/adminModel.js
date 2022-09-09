const {Schema , model} = require("../connection");

const schema=new Schema({
    firstName:String,
    lastName:String,
    
   

})

module.exports=model("admin",schema);