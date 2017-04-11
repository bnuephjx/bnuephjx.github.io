define(function(require){
	var Marionette = require("marionette");
	var tmpl = require("text!./app.html");
	
	var TopBarView = Marionette.LayoutView.extend({
		template:_.template(tmpl),
		tagName:'header',
		className:'top-bar clearfix'
	});
	
	return TopBarView;
});