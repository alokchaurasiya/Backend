const Model = require('../models/dataSetModel');
const router = require('express').Router();


router.post('/add', (req, res) => {
    // reading client data from request body
    console.log(req.body);
    // res.send('response from dataSet router');

    // Create Operation
    new Model(req.body).save()
        .then((result) => {
            console.log(result);
            console.log('data saved');
            res.json(result);
        }).catch((err) => {
            console.error(err);
            res.json(err);
        });
})

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        console.log(result);
        setTimeout(() => {
            res.json(result);
        }, 500);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
    // res.send('response from dataSet router at getall');
});

router.get('/getbyid/:dataid', (req, res) => {
    
    Model.findById( req.params.dataid ).populate('uploadedBy')
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})
router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
});


module.exports = router; 