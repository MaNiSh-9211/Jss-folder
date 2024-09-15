const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

// Array to store user information
let accounts = [];

// Read the sign-in page HTML file synchronously
const signInPage = fs.readFileSync('./PROJECT-TODO/signIn.html', 'utf8');
// Read the login page HTML file synchronously
const loginPage = fs.readFileSync('./PROJECT-TODO/login.html', 'utf8');
// Read the todo app page HTML file synchronously
const todoPage = fs.readFileSync('./PROJECT-TODO/todo.html', 'utf8');

// Create a server
const server = http.createServer((req, res) => {
  // Set the content type to HTML
  res.setHeader('Content-Type', 'text/html');

  // Handle form submissions
  if (req.method === 'POST') {
    // Handle sign-in form submission
    if (req.url === '/signIn') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const formData = querystring.parse(body);
        const email = formData.email;
        const password = formData.password;
        // Check if the user already exists
        const userExists = accounts.some(user => user.email === email);
        if (userExists) {
          res.writeHead(401);
          res.end('User already exists');
        } else {
          // Store the user information in the accounts array
          accounts.push({ email, password, todoList: [] });
          // Redirect the user to the todo app URL
          res.writeHead(302, { 'Location': './PROJECT-TODO/todo.html' });
          res.end();
        }
      });
    }

    // Handle login form submission
    if (req.url === '/login') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const formData = querystring.parse(body);
        const email = formData.email;
        const password = formData.password;
        // Find the user in the accounts array
        const user = accounts.find(user => user.email === email && user.password === password);
        if (user) {
          // Send the todo app page HTML in the response
          res.writeHead(200);
          res.end(todoPage.replace('<!-- todoList -->', JSON.stringify(user.todoList)));
        } else {
          res.writeHead(401);
          res.end('Unauthorized');
        }
      });
    }

    // Handle todo list update form submission
    if (req.url === '/updateTodoList') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const formData = querystring.parse(body);
        const email = formData.email;
        const password = formData.password;
        const todoList = formData.todoList;
        // Find the user in the accounts array
        const user = accounts.find(user => user.email === email && user.password === password);
        if (user) {
          // Update the user's todo list
          user.todoList = todoList;
          res.writeHead(200);
          res.end('Todo list updated');
        } else {
          res.writeHead(401);
          res.end('Unauthorized');
        }
      });
    }
  } else {
    // Handle GET requests
    if (req.url === '/signInPage') {
      // Send the sign-in page HTML in the response
      res.writeHead(200);
      res.end(signInPage);
    } else if (req.url === '/loginPage') {
      // Send the login page HTML in the response
      res.writeHead(200);
      res.end(loginPage);
    }
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
