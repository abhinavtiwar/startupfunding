const express = require("express");
const router=express.Router();
const Model=require("../models/investorModel");

router.post('/add',(req,res) =>{
    const formdata=req.body;
     console.log(req.body);//used to get the data in post
   // res.send("request processed in user router");
   
    //create operation of crud
    new Model(formdata).save()   
    .then((result) => {//shortcut used is thenc
        console.log("data sucessfully saved in investor ");
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
  });
    
//this is used for feched all user data
router.get("/getall", (req, res) => {
  Model.find({})
    .then((result) => {
      console.log("Investor data fetched");
      res.json(result);
    })
    .catch((err) => {
      console.error("error");
      res.json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  console.log(req.params.id); //this is used to get data when data is in url from (GET). for body data(POST) used req.body
  res.send("responce from getbyid");
});

// for login page
router.post( '/authenticate', (req, res) => {

  const formdata = req.body;
//findone is used to find first entry 
  Model.findOne({email : formdata.email, password : formdata.password})
  .then((userdata) => {
    if(userdata){
      console.log('login success');
      res.status(200).json(userdata);
    }else{
      console.log('login failed');
      res.status(300).json({loginStatus : false})
    }
  }).catch((err) => {
    console.error(err);
    res.json(err);
  });
})

router.put("/update/:id", (req, res) => {
  const formdata = req.body;
  //to find the entry by id and update with formdata
  Model.findByIdAndUpdate(req.params.id, formdata)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error("error");
      res.json(err);
    });
});

  // to find the entry by id and update with formdat
module.exports=router;