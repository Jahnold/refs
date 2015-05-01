#! /usr/local/bin/node

// requirements
var util = require("util"),
    xmldoc = require("xmldoc").XmlDocument,
	fs =  require("fs");

// get the view variable name
var viewVar = (process.argv[2] || "");

// get the filename of the layout to process
var layout = (process.argv[3] || "");


// converts an xml view_id => viewId java var name
function underscoreToCamel(viewId) {
	
	return  viewId.replace(/_([a-z])/g, function (g) { 
		return g[1].toUpperCase(); 
	});

}

// recursively parses the layout xml
function parseViewItem(item) {
	
	if (item.attr['android:id'] != null) {
			
		var view_id = item.attr['android:id'].substring(5);
		var viewId = underscoreToCamel(view_id);
		var viewType = item.name;

			console.log(
				viewType + " " + viewId + " = (" + viewType + ") " + viewVar + ".findViewById(R.id." + view_id + ");"
			);

	}

	item.eachChild(function(child) {
		
		parseViewItem(child);

	});
}



// read the layout file 
fs.readFile(__dirname + "/" + layout, function(err, data) {
	
	// parse the xml
	var xml = new xmldoc(data);
	parseViewItem(xml);

});