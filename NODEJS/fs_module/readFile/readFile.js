
// synchronous function
const fs=require('fs')
let data
try {
     data=fs.readFileSync('./NODEJS/demo1.txt','utf8')
     console.log('data readed sucessfully:',data)
}
catch(err){
    console.error('error has occured:',err)
}
console.log('data readed sucessfully:',data)

// for asynchroous functions 

fs.readFile('./NODEJS/demo1.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('File read successfully:', data);
    }
  });

// //   3rd way
// const data = fs.readFileSync('./demo1.txt', 'utf8');

//   // Check if an error occurred during the file read operation
//   if (data instanceof Error) {
//     console.error('Error reading file:', data);
//   } else {
//     console.log('File read successfully:', data);
//   }//not affective for all cases