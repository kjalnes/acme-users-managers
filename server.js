const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
const routes = require('./routes')


app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.use('/', routes);

app.get('/', (req, res, next) => {
    // res.send('hello')
    res.sendFile(path.join(__dirname, 'index.html'))
});

//all other routes use routes.js file
app.use('/', routes);


    // GET /
    // GET /api/users
    // GET /api/managers
    // PUT /api/users/:id


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

db.seed()
