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