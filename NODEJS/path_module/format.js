const path = require('path');

const pathObject = {
  root: '/home/user',
  dir: '/home/user/Documents',
  base: 'file.txt',
  name: 'file',
  ext: '.txt'
};

const formattedPath = path.format(pathObject);

console.log(formattedPath); // Output: /home/user/Documents/file.txt