// asynchronous function
const fs=require('fs')
fs.unlink('./NODEJS/demo1.txt',(err)=>{
    if(err){
        console.log('an error has occured',err)
    }
    else{
      console.log('file has been sucessfully deleted')  
    }
})
//synchronous function
// try{
//     fs.unlinkSync('./NODEJS/demo1.txt')
//     console.log('file has been sucessfully deleted')
// }
// catch(err){
//     console.log('an error has occured',err)
// }