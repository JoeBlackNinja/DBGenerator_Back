const express = require( 'express');
const routes = express.Router();

const first_name = require('../databases/first_name');
const last_name = require('../databases/last_name');
const email = require('../databases/email');
const company = require('../databases/company');
const address = require('../databases/address');

const random = require('../utilities/random');
const { forEach } = require('../databases/first_name');

/* routes.post('/', (req,res) => {
    const parametros = req.body;
    console.log(parametros.email);
    res.send('OK');
}) */

const array_ =(datosIndices, datosValores) => {
    let register = new Object();
    for(let i = 0; i<datosIndices.length; i++){        
        register[`${datosIndices[i]}`] = eval(`${datosValores[i]}[random()]`)
    }
    return register;
};

const generadorDoc = (params, datosIndices, datosValores) => {
    return new Promise((resolve, reject) => {
        let arrayToSend = [];
        for(let i = 0; params.cantidad > i; i++){
            arrayToSend.push(
                array_(datosIndices, datosValores)
            );                      
        }
        resolve(arrayToSend);
    })    
}

routes.get('/number/:cantidad', async (req, res) => {
   const { body, params } = req;
   const datosIndices = [];
   const datosValores = []; 
   for (const key in body) {
        datosIndices.push(key);
        datosValores.push(body[key])
   }
   const object = await generadorDoc(params, datosIndices, datosValores);
   res.send(object); 
})

module.exports = routes;