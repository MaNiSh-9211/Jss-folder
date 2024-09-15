const http = require('http');
const fs = require('fs');

// Read the login.html file synchronously
const login = fs.readFileSync('./NODEJS/todo_login/login.html', 'utf8', (err) => {
    if (err) {
        console.log('error has been occured', err);
    } else {
        console.log('file readed sucessfully');
    }
});
const todo = fs.readFileSync('./NODEJS/todo_login/todo.html', 'utf8', (err) => {
    if (err) {
        console.log('error has been occured', err);
    } else {
        console.log('file readed sucessfully');
    }
});

const server = http.createServer((req, res) => {
    // Set the content type to HTML
    res.setHeader('Content-Type', 'text/html');
    // Handle form submissions
    if (req.method === 'POST' && req.url === '/login') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const formData = querystring.parse(body);
            const email = formData.email;
            const password = formData.psw;
            console.log(`Email: ${email}, Password: ${password}`);
            res.writeHead(302, { 'Location': '/user' });
            res.end();
        });
    }

    // Handle requests for the login page
    if (req.url === '/login') {
        res.writeHead(200);
        res.end(login);
    }
    // Handle requests for the user page
    else if (req.url === '/user') {
        res.writeHead(200);
        res.end(todo);
    }
    // Handle other requests (e.g., favicon.ico)
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
