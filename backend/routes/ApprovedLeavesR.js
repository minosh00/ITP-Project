const express = require('express');
const approvedleaves = require('../models/ApprovedLeaves');

const router = express.Router();

//Approved leave request send
router.post('/approveleaves/save',(req,res)=>{
    let newapproveleaves = new approvedleaves(req.body);
    newapproveleaves.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Your Approved leave requests send successfully"
        });
    });
});

//Approved leave requets

router.get('/approvedleaverequests', (req, res) => {
    approvedleaves.find().exec((err, approvedrequest)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingapprovedleaves:approvedrequest
        });
    });
});


module.exports = router;