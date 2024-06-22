const connect = require('connect');
const app = connect();

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}

const helloWorld = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: "Welcome to DressStore application." }));
};

const byeWorld = (req, res) => {
    res.end('Bye World Allen');
};

app.use(logger);
app.use('/bye', byeWorld);
app.use(helloWorld);

app.listen(3000);

console.log('Server running at http://localhost:3000/');
