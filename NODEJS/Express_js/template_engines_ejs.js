// embadded java script
// similar to dynamic html
// ejs have same syntax like html but with extra features . we can sent same html file for multiple responces with changed values.
const express= require('express')
const app=express();
// Define a route for the root URL
app.set('view engine', 'ejs');

// Set the path to the views folder
app.set('views', './NODEJS/express_js');
app.get('/', (req, res) => {
  res.render('log2');
});

// Start the server and listen on port 3000
app.listen(8000, () => {
  console.log('Server is running on http://localhost:8080');
});
