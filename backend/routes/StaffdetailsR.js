const express = require('express');
const { findByIdAndUpdate } = require('../models/Staffdetails');
const Staffdetails = require('../models/Staffdetails');

const router = express.Router();


//get posts

router.get('/Staffdetails/retrive', (req, res) => {
    Staffdetails.find().exec((err, Staffdetailsdula)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStaffdetails:Staffdetailsdula
        });
    });
});

//get specific post

router.get("/Staffdetails/:id", (req, res)=>{
    let regID = req.params.id;

    Staffdetails.findById(regID, (err, Staffdetails)=>{
        if(err){
            return res.status(400).json({
                success:false, err
            });
        }

        return res.status(200).json({
            success:true, 
            Staffdetails
        });
    });
});


module.exports = router;