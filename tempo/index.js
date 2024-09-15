const express=require ('express');
const app=express()
//const path=require('path')

app.set("view engine","ejs");

app.use(function(req,res,next){
    console.log('middleware working!');
    next();
})


app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.get('/about',(req,res)=>{
    // res.sendFile(path.join(__dirname,"/tempo/temp.html"))
    res.sendFile("/tempo/temp.html",{root:__dirname});
    //res.sendFile(__dirname +'/temp.html'.)
   // res.sendFile("/temp.html",{root:'./'});
   // res.sendFile("/temp.html",{root:'./express/tempo'});

   // res.send('About'); 
   //  res.json("ritesh:20");
})
app.get('/profile/:user',(req,res)=>{
    res.send(`Hello from ${req.params.user}`);
})
app.listen(4040,()=>{
    console.log('server started'); 
})

//console.log(__dirname);