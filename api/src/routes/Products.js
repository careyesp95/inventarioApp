const express = require('express');
const {Product,Process} = require('../db');

const app = express.Router()

app.get('/', async (req,res,next) => {
    try{
        const getProducts = await Product.findAll({
            include:Process,
        });
        res.send(getProducts);

    }catch(err){
        next(err)
    }
})

app.post('/', async (req,res,next) => {
    try{
        const imageDefault = 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg';
        
            let {name,image, proces} = req.body;

        
            if(!image || image === null) image = imageDefault;
            if(!name) return res.json({message:'Los campos son requeridos, por favor ingresar los datos completos...'})
            let createProduct = await Product.create({
                name,
                image
            });
            let process = await Process.findOne({where: {name:proces}})
            await createProduct.addProcess(process)
    
            res.status(200).send(process)

    }catch(err){
        next(err)

    }    
})

module.exports = app;