// 🐱‍🚀🐱‍👓🐱‍💻🐱‍🚀🐱‍👓🐱‍💻🐱‍🚀 EXAM ROUTERS START🐱‍👓🐱‍💻🐱‍🚀🐱‍👓🐱‍💻🐱‍🚀🐱‍👓
const axios =require('axios');
function getDataFromApi(req,res){
    const URL="https://digimon-api.vercel.app/api/digimon";
    axios.get(URL)
    .then(result=>{
       
        res.status(200).send(result.data);
    })
    .catch(err=>{
        console.log('no data render',err);
    })
} 
module.exports=getDataFromApi;