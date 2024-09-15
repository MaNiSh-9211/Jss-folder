const path = require('path');

const filePath = '/home/user/example.txt';
const parsedPath = path.parse(filePath);

console.log(parsedPath);