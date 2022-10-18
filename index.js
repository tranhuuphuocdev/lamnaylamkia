'use strict';

var express = require('express');
var server = express();

const HOST = '0.0.0.0';
const PORT = '8080';

server.get('/', function (req, res, next) {
    res.send('Hello Worddddd');
    next();
});

server.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
