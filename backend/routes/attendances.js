const express = require('express');
const attendance = require('../models/attendance');


const router = express.Router();

//insert time tables

router.post('/attendance/insert',(req,res)=>{

   let newattendance = new attendance(req.body);

    newattendance.save((err)=>{
        if(err){
            return res.status(400).json({
                    error:err
            });
        }
        return res.status(200).json({
            Success:"attendance saved successfully"
        });
    });

});


module.exports = router;