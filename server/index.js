"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./procedures/api");
var express = require("express");
var path = require("path");
var routing = require('./middleware/routing.mw.js');
var clientPath = path.join(__dirname, '../client');
var dataPath = path.join(__dirname, 'data.json');
var app = express();
app.use(express.static(clientPath));
app.use('/api', api_1.default);
console.log('listening');
app.listen(process.env.PORT || 3000);
