// const express=require('express');
// app=express();

// // query
//  app.get('/',(req,res)=>{
//      let firstname=req.query.firstname;
//      let lastname=req.query.lastname;
//      res.end(`${firstname} ${lastname}`);


//  })

//  // header
//  app.get('/',(req,res)=>{
//    let firstName=req.header('firstName');
//    let UserAgent=req.header('User-Agent');
//    res.end(UserAgent);


//  })
//  app.post('/',(req,res)=>{
//      let userName= req.header('userName');
//      let password= req.header('password');
//      res.send(`username:${userName},password:${password}`)
     
   

//  })

//  // this is download response operation

// app.get('/four',(req,res)=>{
//      res.download('./picture/abc.png')
// });







// app.listen(3000,()=>{
//      console.log('server run success');
// })