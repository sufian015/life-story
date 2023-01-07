
 const express=require('express');
 app=express();

//This is simple string operation

 app.get('/one',(req,res)=>{
      res.send('This is simple string operation');
 })

 // this is simple status operation
 app.get('/two',(req,res)=>{
     res.status(401).end('unuthorised')
})

//this is simple json operation

app.get('/three',(req,res)=>{

     let myJson=[
          {
               name:'sufian',
               roll:22,
               occupation:'student'
          },
          {
               name:'shofik',
               roll:23,
               occupation:'businessman'
          },
          {
               name:'arafat',
               roll:24,
               occupation:'teacher'
          }
     ]
     res.json(myJson);
})

// this is download response operation

app.get('/four',(req,res)=>{
     res.download('./picture/abc.png')
});

//this is response redirect method
app.get('/Bangladesh',(req,res)=>{
     res.redirect('http://localhost:8000/india')
});

app.get('/india',(req,res)=>{
    res.send('this is india')
});

// response header

app.get('/five',(req,res)=>{
     res.append('name','rabbil hasan')
     res.append('city','Dhaka')
     res.append('age','30')
     res.status(201).end('this is five');
 });

 //response cookie

 app.get('/six',(req,res)=>{
     res.cookie('name','Sufian')
     res.cookie('city','Dinajpur')
     res.end('the cookie is added')
 });

 // clear cookie

 app.get('/seven',(req,res)=>{
     
     res.clearCookie('city','Dinajpur')
     res.end('the cookie is cleared')
 });

 // this is simple request response
 









app.listen(8000,()=>{
     console.log('server run success');
 })
