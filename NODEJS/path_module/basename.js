const path = require('path');

var filePath = '/path/to/my/file.txt';
var baseName = path.basename(filePath);

console.log(baseName); // Output: file.txt

//2nd

var filePath = '/path/to/my/file.txt';
var baseName = path.basename(filePath, '.txt');

console.log(baseName); // Output: file


