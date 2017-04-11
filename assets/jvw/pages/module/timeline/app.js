define(function(require){
	var Marionette = require("marionette");
	
	var tmpl = require("text!./app.html");
	
	var TimeLineView = Marionette.LayoutView.extend({
		template:_.template(tmpl),
		className:'timelineBox'
	});
	
	return TimeLineView;
});