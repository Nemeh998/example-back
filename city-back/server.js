'use strict';
//////////////import express/////////////
const express=require('express');
const pookdata=require('./assits/Pokemon.json');
console.log(pookdata)
/////////server has all properities and method of express//////////
const server=express();
require('dotenv').config();
const PORT=process.env.PORT||3033;
server.get('/test',(req,res)=>{
    res.status(200).send('its WORK')
})
////////////////////////////get data from file json////////////////////
//localhost:3002/pookdata?pookname=chesto
//{ pookname: 'chesto' }the result
//   console.log(req.query)
server.get('/pookdata',(req,res )=>{
    console.log(req.query)
    const selectdata=pookdata.results.find(poke=>{
        console.log(poke,'poke')
        console.log(poke.name,'poke name')
        if(poke.name == req.query.pookname){
            return poke
        }
    })
    res.send(selectdata);
})

///////////////////////////////////////////////

server.get('/',(req,res)=>{
    res.status(200).send('home routs')
})
const shoplist=['water','checken','icecreem'];
server.get('/sopelist',(req,res)=>{
    res.status(200).send(shoplist);
})
server.get('*',(req,res)=>{
    res.status(404).send('NOT FOUND')
})
server.listen(PORT,()=>{
    console.log(`listing on PORT ${PORT}`)
})
