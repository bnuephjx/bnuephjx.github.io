define(function(require){
	var Marionette = require("marionette");
	
	var tmpl = require("text!./app.html");
	
	var GridListView = Marionette.LayoutView.extend({
		template:_.template(tmpl),
	});
	
	return GridListView;
})