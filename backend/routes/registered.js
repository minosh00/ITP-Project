const express = require('express');
const { findByIdAndUpdate } = require('../models/registered');
const registered = require('../models/registered');

const router = express.Router();

//save posts

router.post('/register/save', (req, res)=>{

    let newPost = new registered(req. body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Record saved successfully"
        });
    });
});

//get posts

router.get('/register/posts', (req, res) => {
    registered.find().exec((err, registered)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:registered
        });
    });
});

//get specific post

router.get("/register/:id", (req, res)=>{
    let regID = req.params.id;

    registered.findById(regID, (err, post)=>{
        if(err){
            return res.status(400).json({
                success:false, err
            });
        }

        return res.status(200).json({
            success:true, 
            post
        });
    });
});

//updating posts
router.put('/register/update/:id', (req, res)=>{
    registered.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, post)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }

            return res.status(200).json({
                success:"Updated succesfully"
            });
        }
    ); 
});

//delete posts

router.delete('/register/delete/:id', (req, res)=>{
    registered.findByIdAndRemove(req.params.id).exec((err, deletedPost) =>{
        if(err){
            return res.status(400).json({
                message:"Delete error", err
            });
        }

        return res.status(200).json({
            message:"Delete successful", deletedPost
        });
    });
});

module.exports = router;