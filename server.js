'use strict';

//dependencies 5
const express  = require('express');
// const axios =require('axios');
const dotenv = require('dotenv');
const cors = require('cors');
const axios =require('axios');
const mongoose = require('mongoose');
// use dependencies 

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(express.json());
// routers 
// app.all('*',(req,res)=>{
//     res.status(400).send('plz try anthor router')
// })

app.get('/',(req,res)=>{
    res.status(200).send('its work')
})
// 🐱‍🚀🐱‍👓🐱‍💻🐱‍🚀🐱‍👓🐱‍💻🐱‍🚀 Database code start🐱‍👓🐱‍💻🐱‍🚀🐱‍👓🐱‍💻🐱‍🚀🐱‍👓
const gameSchema = new mongoose.Schema({
    name: String,
    img:String,
    level:String,
  });

  const gameModel = mongoose.model('game', gameSchema);

const getDataFromApi=require('./controlar/getData');
app.get('/getDataFromApi', getDataFromApi);

//========post 
app.post('/addToFav', (req ,res)=>{

    const {name , img , level} = req.body
    const newObj = new gameModel(
     {
         name:name,
         img:img,
         level:level,
     }
    )
    newObj.save();
 })

 //=========>
 app.get('/getdatafromDataDb',(req,res) => {
 
     gameModel.find({},(err,gameData)=>{
         if(err){
             console.log('ew cant get Data frome Api',err)
          
         }else{
            console.log(gameData)
            res.status(200).send(gameData)
                     }
     })
 })
//=================>Delete
 
app.delete('/deletDataFromeDB/:id',(req,res) => {
 const {id}=req.params
    gameModel.findOneAndDelete({_id:id},(err,gameData)=>{
        if(err){
            console.log('ew cant delet Data frome Api',err)
         
        }else{
            gameModel.find({},(err,gameData)=>{
                if(err){
                    console.log('ew cant get Data frome Api',err)
                 
                }else{
                
                    res.status(200).send(gameData)
                }
            })
        }
    })
})
//=================>update
app.put('/updateDataFromeDB',(req,res) => {
    const {name , img , level} = req.body
       gameModel.findOne({_id:id},(err,gameData)=>{
           if(err){
               console.log('ew cant delet Data frome Api',err)
            
           }else{
               gameData.name=name;
               gameData.level=level;
               gameData.save()
               gameModel.find({},(err,gameData)=>{
                   if(err){
                       console.log('ew cant get Data frome Api',err)
                    
                   }else{
                   
                       res.status(200).send(gameData)
                   }
               })
           }
       })
   })
//connections
mongoose.connect('mongodb://localhost:27017/game', {useNewUrlParser: true, useUnifiedTopology: true});
app.listen(PORT , ()=>{
    console.log(`SERVER IS UP AND RUN ON PORT : http://localhost:${PORT}`)
})