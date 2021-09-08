const mongoose = require('mongoose');

const updateDetailSchema = new mongoose.Schema({


    lecId:{
        type:String,
        required:true
    },

    lecName:{
        type:String,
        required:true
    },
    updateDetail:{
        
        type:String,
        required:true
    },

    correctDetail:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    cNumber:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model("UpdateDetailsReq",updateDetailSchema);