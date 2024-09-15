// // Import the express module
// const express = require('express');


// //const application = express();
// const {application}=require('express')
// // The express() function is used to create a new Express application. It returns an Express application object, which is then stored in the app 
// // variable. This object has various methods and properties that can be used to configure and run the Express application.
// // Define a route for the root URL  .the get function is inside the application object
// application.get('/', (req, res) => {
//   res.send('Hello');
// });
// // Start the server and listen on port 3000
// application.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });
// Import the express module and destructure the application object
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  // const filePath = path.join( 'login.html');
  res.sendFile('/NODEJS/express_js/log2.html',{root:'./'});
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});

