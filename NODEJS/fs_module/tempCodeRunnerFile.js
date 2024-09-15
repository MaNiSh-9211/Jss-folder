function copyFile(sourse,destination){
    var data;
    try{
data=fs.readFileSync(sourse,'utf8')
console.log('file readed sucessfully')
    }
    catch(err){
        console.log('an error has occured',err)
    }
    try{
fs.writeFileSync(destination,data,)
console.log('file written sucesfully')
    }
    catch(err){
        console.log('an error has occured',err)
    }
}
