const fs=require('fs')
 fs.writeFile('./NODEJS/demo1.txt','hy my name is manish','utf-8',function(err){
    if(err){
        console.error("there is an error :",err)
    }
    else{
        console.log('data written sucessfully')
    }
 })
 // Synchronous file writing function
//  In the context of the fs.writeFileSync function in Node.js, the function returns undefined if the file write operation is successful. This means that if the file write operation is successful, the variable result will be equal to undefined, and the if condition result === undefined will evaluate to true.
//  Here's an example of how you can use the fs.writeFileSync function and the if condition result === undefined to check if the file write operation was successful:

 //function writeFileSyncExample() {
//    const result = fs.writeFileSync('demo1.txt', 'Hello, world!', 'utf8');
  
//    if (result === undefined) {
//      console.log('File written successfully.');
//    } else {
//      console.error('Error writing file:', err);
//    }
//  //}//this code is rong
 
//  //writeFileSyncExample();
//  //3rd example
 try {
    fs.writeFileSync('demo1.txt', 'Hello, world!', 'utf8');
    console.log('File written successfully.');
  } catch (err) {
    console.error('Error writing file:', err);
  }