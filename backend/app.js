const express = require("express");
const mongoose = require("mongoose")
const router = require("./routes/patient_route")
const cors  = require("cors")
const app = express();

// middleware
app.use(express.json());    
app.use(cors());
app.use("/patients",router) //localhost:1000/books

mongoose.connect("mongodb://admin:pyavMBkSZ7TTbUUi@ac-mnz7ng1-shard-00-00.qrrt1w8.mongodb.net:27017,ac-mnz7ng1-shard-00-01.qrrt1w8.mongodb.net:27017,ac-mnz7ng1-shard-00-02.qrrt1w8.mongodb.net:27017/?ssl=true&replicaSet=atlas-5xv9i7-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasApp"
)
    .then(()=>console.log("Connected to DB"))
        .then(()=>{
            app.listen(1000)
        }).catch((err)=>console.log(err));


// pyavMBkSZ7TTbUUi
