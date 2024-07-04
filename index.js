import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import dotenv from "dotenv";
import route from "./message.route.js";


const app = express();
 app.use(bodyParser.json());

 dotenv.config();


 const PORT = process.env.PORT || 6000;
 const URL = `mongodb+srv://rayhanmd655:${process.env.PASS}@backenddb.p2d07cz.mongodb.net/protfolio?retryWrites=true&w=majority&appName=backendDB`;


 mongoose.connect(URL).then(  () => {
  



    console.log("Database Connect Successfully");

    app.listen(PORT, () => {
        console.log(`Server Port is:${PORT}`)
    })
 } ).catch(error => console.log(error))


 app.use('/rayhan',route);
