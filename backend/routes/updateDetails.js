const express = require('express');
const updateDetails = require('../models/updateDetails');

const router = express.Router();

//send update lecturer details request
router.post('/lecDetailsReq/save',(req,res)=>{
    let newupdateDetail = new updateDetails(req.body);
    newupdateDetail.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Send Update personal details request successfully! "
        });
    });
});

//Read update lecturer detail requests

router.get('/lecDetailsReq', (req, res) => {
    updateDetails.find().exec((err, updateDetail)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingUpdateDetails:updateDetail
        });
    });
});

module.exports = router;