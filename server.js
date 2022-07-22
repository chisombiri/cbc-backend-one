// const http = require('http');

// const server = http.createServer((req, res) => {
//     // console.log(req.headers);
//     // console.log(req.method);
//     // console.log(req.url)

//     // res.setHeader('Content-Type', 'text/html');
//     // res.end('<h1>Yoo this server works</h1>');

//     //Pushing Json object
//     const user = {
//         firstName: 'Kofo',
//         hobby: 'skating',
//         marriedTo: 'Ben',
//         age: 34
//     }

//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(user));
// })

// server.listen(3005);

// const express = require('express');

// const app = express();

//middleware
// app.use((req, res, next) => {
//     console.log('<h1>Hello middleware</h1>');
//     next();
// });

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

//root route
// app.get('/', (req, res) => {
//     res.send('getting root route');
// });

// app.get('/profile', (req, res) => {
//     res.send('getting user profile');
// })

// app.get('/:id', (req, res) => {
//     // console.log(req.query);
//     //req body
//     //req.headers
//     //req.params
//     console.log(req.params);

//     res.send('getting root');
// })

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3005);