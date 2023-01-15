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
        const imageDefault = 'https://assets.myfoodandfamily.com/adaptivemedia/rendition/id_866c5375f5767edfdd1a438cd9f4d981413d4ea8/clid_mff/prid_ALL-DEFAULT-OPTIONS/name_./ck-lf-nuestras-mejores-recetas-con-carne-de-pollo-783x405';
        
            let {name,image, status} = req.body;
            console.log('soy el nombre',name , 'soy el status',status)

            if(!image || image === null) image = imageDefault;
            if(!name) return res.json({message:'Los campos son requeridos, por favor ingresar los datos completos...'})
            let createProduct = await Product.create({
                name,
                image
            });
            let process = await Process.findOne({where: {name:status}})
            await createProduct.addProcess(process)
    
            res.status(200).send(process)

    }catch(err){
        next(err)

    }    
})

module.exports = app;