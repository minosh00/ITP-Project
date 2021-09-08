const express = require('express');
const studentattendances = require('../models/studentattendance');
const router = express.Router();


//student attendance insert
router.post('/studentattend/insert',(req,res)=>{
           
    let newstudentattendance = new studentattendances(req.body);

    newstudentattendance.save((err)=>{
     if(err){
         return res.status(400).json({
                 error:err
         });
     }
     return res.status(200).json({
         Success:"student attendance saved successfully"
     });
  });

}); 


module.exports = router;