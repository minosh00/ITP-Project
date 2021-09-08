const express = require('express');
const { findByIdAndUpdate } = require('../models/subjects');
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');
const Subjects = require('../models/subjects');
const pdf = require('html-pdf');
const pdfTemplate = require('../documents');

const router = express.Router();



//add a new subject to the system

/*router.post('/subject/save', upload.single("image"), async(req, res)=>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path)

    // Create new user
    let subject = new Subjects({

        subjectId: req.body.subjectId,
        subjectName: req.body.subjectName,
        subjectType: req.body.subjectType,
        subjectCategory: req.body.subjectCategory,
        subjectFee: req.body.subjectFee,
        subjectDes: req.body.subjectDes,
        avatar: result.secure_url,
        cloudinaryId: result.public_id,
      });

      // Save user
      await subject.save();
        res.json(result);

    } catch(err){
        console.log(err);
    }
});*/

router.post('/subject/save', (req, res)=>{

    let newSubject = new Subjects(req.body);

    newSubject.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"New Subject Added!"
        });
    });
});

//reading subjects

router.get('/subject', (req, res)=>{
    Subjects.find().exec((err, subjects)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:true,
            existingSubjects:subjects
        });
    });
});

//updating subjects stuff

router.put('/subject/update/:id', (req, res)=>{
    Subjects.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, subjects)=>{
            if(err){
                return res.status(400).json({
                    error:err
                })
            }
            return res.json({
                success:"Subject Updated!", subjects
            });
        }
    );
});


//delete subjects from the system

router.delete('/subject/delete/:id', (req, res)=>{
    Subjects.findByIdAndRemove(req.params.id).exec((err, deletedPost)=>{
        if(err){
            return res.status(400).json({
                message:"Subject Delete Unsuccesful!", err
            })
        }
        return res.json({
            message:"Subject Removed Succesfully!", deletedPost
        });
    });
});

//get a specific subject

router.get("/subject/:id", (req, res)=>{
    let subjectId = req.params.id;

    Subjects.findById(subjectId, (err, subject)=>{
        if(err){
            return res.status(400).json({
                success:false, err
            });
        }

        return res.status(200).json({
            success:true, subject
        });
    });
});

//create the PDF

router.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

//get the PDF

router.get('/fetch-pdf', (req, res) => {
    res.sendFile('result.pdf', { root: 'C:/Users/dinir/Desktop/Projects/RoyalEdu-subject-withimages' });
})


module.exports = router;