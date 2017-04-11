define(function(require){
	var Marionette = require("marionette");
	var tmpl = require("text!./app.html");
	
	var PagesNavView = Marionette.LayoutView.extend({
		template:_.template(tmpl),
		className:'pages clearfix'
	});
	
	return PagesNavView;
})
