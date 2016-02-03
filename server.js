/*
 * Author: Daniel Holmlund <daniel.w.holmlund@Intel.com>
 * Copyright (c) 2015 Intel Corporation.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var express = require('express');
var cors = require('cors');

var app = express();

 app.use(bodyParser.json()); // for parsing application/json
 app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
 app.use(multer()); // for parsing multipart/form-data
 // For cross-origin requests
app.use(cors());

// Listen on port 4000
app.listen(4000);

 function getModes(){
 	var mode = JSON.parse(fs.readFileSync("./modes.conf", "utf8"))|| {};
 	return JSON.parse(JSON.stringify(mode))|| {};
 }

 app.get('/home/getmodes', function (req, res) {

 });

 app.post('/home/setmode', function (req, res) {

 });

 app.get('/home/hue/status', function (req, res) {

 });

 app.post('/home/hue/color/livingroom', function (req, res) {

 });

 app.get('/home/hue/color/childrenroom', function (req, res) {

 });

 app.post('/home/cree/status', function (req, res) {

 });

 app.post('/home/cree/brightness', function (req, res) {

 });

 app.post('/home/hue/brightness/livingroom', function (req, res) {

 });

 app.post('/home/hue/brightness/childrenroom', function (req, res) {

 });

 
