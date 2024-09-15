const express = require('express');
const fs = require('fs');
const app = express();
let count = 0;

// app.get('/showrequest', (req, res) => {
//     res.sendFile('/NODEJS/express_js/log2.html', { root: './' });
// });

app.use((req,res,next)=>{
    const c = Date();
    const log = `${c} : ${req.url} `;
    if (req.url == '/home' || req.url== '/about') {
        res.send(`You are at ${req.url} page`);
    } 
    else if(req.url=='/showrequest'){
        res.sendFile('/NODEJS/express_js/log2.html', { root: './' });
    }
    else {
        count++;
        res.end(`Invalid ${count} times.`);
        fs.appendFile('error1.log', `${log}\n`, () => { });
    }
    //next();

});

app.listen(8080, () => {
    console.log('server started!');
});
