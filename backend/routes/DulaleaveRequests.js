const express = require('express');
const dulaleaverequests = require('../models/DulaleaveRequest');

const router = express.Router();


//read leave request details

router.get('/dulaleaverequests', (req, res) => {
    dulaleaverequests.find().exec((err, dulaleave)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingleaveDUlaRequests:dulaleave
        });
    });
});

// get specific lec id

router.get('/paymentdetails/:id',(req,res)=>{
    let lecId =req.params.id;

    dulaleaverequests.findById(lecId,(err,lArequest)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            lArequest
        });
    });
});

module.exports = router;