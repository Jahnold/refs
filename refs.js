#! /usr/local/bin/node

var util = require("util"),
    xml2js = require("xml2js"),
	fs =  require("fs");

// get the view variable name
var view = (process.argv[2] || "");

// get the filename of the layout to process
var layout = (process.argv[3] || "");

console.log("view" + view);
console.log("layout" + layout);

var parser = xml2js.Parser();
parser.addListener('end', function(result) {
	console.dir(result)
});

fs.readFile(__dirname + "/" + layout, function(err, data) {
	parser.parseString(data);
});