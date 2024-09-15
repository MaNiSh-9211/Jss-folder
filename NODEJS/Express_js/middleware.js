const express= require('express')
const app=express();
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
});
app.get('/', (req, res) => {// rout handlers
  res.send('Hello');
  console.log(`${req.method} ${req.url} - ${new Date()}`);
});
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
