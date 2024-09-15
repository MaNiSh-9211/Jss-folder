
// The ./ notation in file paths refers to the current directory. It is used to specify a file or directory that is located in the same 
// directory as the current working directory.
const path=require('path')
let url1='./vehicle/car/rangerover/feature.txt'
let url2='./vehicle/car/rangerover'
let url3='/vehicle/car/rangerover/feature.txt'
let url4='/vehicle/car/rangerover'
console.log(path.isAbsolute(url1))
console.log(path.isAbsolute(url2))
console.log(path.isAbsolute(url3))
console.log(path.isAbsolute(url4))

