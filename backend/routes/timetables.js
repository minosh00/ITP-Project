const express = require('express');
const timetables = require('../models/timetable');

const router = express.Router();

//insert time tables

router.post('/timetables/insert',(req,res)=>{

   let newttable = new timetables(req.body);

    newttable.save((err)=>{
        if(err){
            return res.status(400).json({
                    error:err
            });
        }
        return res.status(200).json({
            Success:"Timetable saved successfully"
        });
    });

});

//retrive time tables

router.get('/retrivetables',(req,res)=>{
    
    timetables.find().exec((err,timetable)=>{
        if(err){
            return res.status(400).json({
                    error:err
            });
        }
        return res.status(200).json({
            Success:true,
            existingttables:timetable
        });
    });

});


//update time tables

router.put('/timetables/update/:id',(req,res)=>{

    timetables.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,tables)=>{
            if(err){
                return res.status(400).json({error:err});
            }

             return res.status(200).json({
                success:"Updated SuccessFull!"
            });
        });
});

//delete time tables

router.delete('/timetables/delete/:id',(req,res)=>{

    timetables.findByIdAndDelete(req.params.id).exec((err,deletedtables)=>{
          
        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:" Deleted Successfull!",deletedtables
        });
    });

});


//search by id timetbales

router.get('/timetables/search/:id',(req,res) =>{

    let eventID = req.params.id;
 
    timetables.findById(eventID,(err,table)=>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            table
        });
    });
 
 });
 

module.exports = router;