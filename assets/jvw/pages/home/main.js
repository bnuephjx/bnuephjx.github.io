define("app",function(require){
	var Marionette = require("marionette");
	var App = Marionette.Application.extend();
	return App;
});

define("main",function(require){
	var _ = require("underscore"),
		Backbone = require("backbone"),
		Marionette = require("marionette");
		
	var MainModel = require("models/main");
	var mainModel = new MainModel();
		
	var SideBarView = require("./module/sidebar/app");	
		
	var App = require("app"),
		Controller = require("controller");
		
	var app = new App();
	
	app.addRegions({
		sidebarRegion:'.js-sidebar-region',
		mainRegion:'.js-right-region'
	});
	
	app.sidebarRegion.show(new SideBarView({
		model:mainModel
	}));
	
	app.on("start",function(){
		var c = new Controller();
		c.initialize(app,mainModel);
		Backbone.history.start();
	});
	
	app.start();
	
	return app;
});