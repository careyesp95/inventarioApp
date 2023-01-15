const express = require('express');
const {Process} = require('../db');



const app = express.Router()

app.get('/', async (req,res,next) => {
    try{
        const processP = await Process.findAll();
        res.send(processP);

    }catch (err){
        next(err)
    }
})



module.exports = app;