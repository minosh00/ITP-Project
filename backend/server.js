const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes here






//app middleware
app.use(bodyParser.json());
app.use(cors());




//route middleware





const PORT = 8080;
const DB_URL = 'mongodb+srv://admin:admin@institutedb.nhxwx.mongodb.net/instituteDB?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB connected');
})
.catch((err)=> console.log('DB connect failed', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});

