const express = require("express");
const router = express.Router();
const Model = require('../models/userModel');
const bcryt = require('bcryptjs');
const salt = bcryt.genSaltSync(10);


router.post("/add",(req , res) =>{
    const formdata = req.body;
    console.log(formdata);
    const hash = bcryt.hashSync(formdata.password,salt);
    formdata.password = hash;

    new Model(req.body)
        .save()
        .then((result) => {
            console.log(result);
            res.json(result)
            
        }).catch((err) => {
            console.log(err);
            res.json(err);
            
        });
});

router.get("/getall", (req,res) => {
    Model.find({})
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  })
  
  router.get('/getbyemail/:email',(req,res) =>{
      console.log(req.params.email);
      
      Model.findOne({email : req.params.email})
      .then((result) => {
          console.log(result);
          res.json(result);
        })
        .catch((err) => {
          console.log(err);
          res.json(err);
        });
  
  })    


router.post('/authenticate' , (req , res) => {
    const formdata = req.body;
    console.log(formdata);

    Model.findOne({email : formdata.email})
    .then((result) => {
        if(result){
            if(bcryt.compareSync(formdata.password , result.password))
            res.json(result);
        }
        else{
            res.status(401).json({status : "login failed"})
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})

module.exports = router;