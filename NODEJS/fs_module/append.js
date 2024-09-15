const fs=require('fs');
// let toappend=' hi my name is abhishek';
// fs.appendFile('./demo1.txt',toappend,(err)=>{
//     if(err){
//         console.error('an error has occured',err)
//     }
//     else{
//         console.log('file has appended sucessfully')
//     }
// })
//synchronous function
try{
fs.appendFileSync('./demo1.txt',toappend)
console.log('file appended sucessfully')
}
catch(err){
console.log('an error has occured,err')
}