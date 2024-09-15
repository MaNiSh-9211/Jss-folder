//var http = require('http');
var fun2 = require('./node2');
//var ans=fun2.prin();
var server = http.createServer(function(req,res){
   
   // console.log('Request URL:', req.url);
    if(req.url==="/"){
        res.write("deault end poin");
        res.end();
    }
    else if(req.url==='/z'){
        res.write("<h1>2nd response</h1>");
        res.end();
    }
    else if(req.url==='/y'){
       // res.write(<b>fun2.prin()</b>);
        res.write("<b>"+fun2.prin()+"</b>");

        res.end();
    }
    console.log('Request URL:', req.url);
});
server.listen(8080, function()
{
    console.log('Server Listening on port 8080');
});