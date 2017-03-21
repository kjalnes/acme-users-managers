const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
const routes = require('./routes')
const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// app.use('/', routes);

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

//all other routes use routes.js file
app.use('/', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

db.seed()
