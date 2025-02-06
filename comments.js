// create web server to handle comments
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

// Parse JSON (uniform resource locators) and form encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable all CORS requests
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});