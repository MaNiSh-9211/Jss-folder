// params :variable name

    // const express= require('express')
    // const app=express();
    // // Define a route for the root URL
    
    // app.get('/profile/:username', (req, res) => {
    //   res.send(`Hello my name is ${req.params}`);
    // });
    
    // // Start the server and listen on port 3000
    // app.listen(8080, () => {
    //   console.log('Server is running on http://localhost:8080');
    // });


//     In Express.js, the req object represents the HTTP request and has various properties and methods that provide information about the request. 
//     One of these properties is req.params, which is an object containing properties mapped to the named route parameters.

// For example, consider the following route definition:

// javascript
// Copy code
// app.get('/users/:id', (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID: ${userId}`);
// });
// In this example, the :id part of the route path is a named route parameter. When a request is made to /users/123,
//  Express will parse the URL and populate req.params with the value 123 for the id property. The req.params object will look like this:

// javascript
// Copy code
// {
//   id: '123'
// }
// This allows you to access the value of the named route parameter in your route handler. In this case, userId will be '123', 
// and the response will be User ID: 123.

// The req.params object is useful when you have dynamic route paths with named parameters, 
// as it allows you to access the values of these parameters in your route handlers.

const express = require('express');
const app = express();

// Middleware function to log req.params
app.use((req, res, next) => {
  next();
});

// Define a route for the root URL
app.get('/profile/:username', (req, res) => {
  res.send(`Hello, my name is ${req.params.username}`);
  print(req);
});

// Start the server and listen on port 8080
app.listen(8080, () => {
    
  console.log('Server is running on http://localhost:8080');
});
function print(req){
console.log('req.params:', req.params);//means params object contain 1 kkey at a time
}
    