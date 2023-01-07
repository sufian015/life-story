const express=require('express');
const bodyParser=require('body-parser');
app=express();
app.use(bodyParser.json());

app.post('/',(req,res)=>{
     let jsonData=req.body;
    let name=jsonData['name']
    let city=jsonData['city']
    res.send(`${name} ${city}`);
})






app.listen(3000,()=>{
     console.log('server run success');
})