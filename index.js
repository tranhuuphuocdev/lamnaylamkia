'use strict';

var express = require('express');
var server = express();

const HOST = 'localhost';
const PORT = '1111';

server.get('/', function (req, res, next) {
    res.send('Hello Word');
    next();
});

server.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);