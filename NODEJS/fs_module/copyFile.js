const fs=require('fs')
// function copyFile(sourse,destination){
//     var data;
//     try{
// data=fs.readFileSync(sourse,'utf8')
// console.log('file readed sucessfully')
//     }
//     catch(err){
//         console.log('an error has occured',err)
//     }
//     try{
// fs.writeFileSync(destination,data,)
// console.log('file written sucesfully')
//     }
//     catch(err){
//         console.log('an error has occured',err)
//     }
// }


//asyncronous function

function copyFile(source, destination) {
    var data;
     data=fs.readFileSync(source, 'utf8')//, (readErr, data) => {
    //     if (readErr) {
    //         console.log('An error has occurred during reading:', readErr);
    //         return;
    //     }
// else{
//     console.log('file readed sucessfully')
// }

        fs.writeFile(destination, data, (writeErr) => {
            if (writeErr) {
                console.log('An error has occurred during writing:', writeErr);
                return;
            }

            else{
                console.log('file written sucessfully')
            }
        });
    // });
}

copyFile('./NODEJS/demo1.txt','./NODEJS/demo2.txt')