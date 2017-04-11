define("controller",function(require){
	var _ = require("underscore"),
		Backbone = require("backbone"),
		Marionette = require("marionette");
	
	var NProgress = require("nprogress");
	
	var Router = require("router");
//	var MainView = require("views/mainView");
	
	var GridListView = require("./module/gridlist/app");
	var RightView = require("views/rightView");
	
	var Controller = Marionette.Object.extend({
		initialize:function(app,model){
			this.app = app;
			this.mainModel = model;
			this.route = new Router({controller:this});
			window.route = this.route;
		},
		index:function(){
			NProgress.start();
			this.mainModel.set("type",'index',{silent:true});
			this.app.mainRegion.show(new RightView({
				model:this.mainModel
			}));
            NProgress.done();
            this.mainModel.trigger("change:detail");
		},
		archives:function(query){
			NProgress.start();
			this.mainModel.set("type",'archives',{silent:true});
			this.mainModel.trigger("change:detail");
			this.app.mainRegion.show(new RightView({
				model:this.mainModel
			}));
            NProgress.done();
		},
		categories:function(query){
			NProgress.start();
			this.mainModel.set("type",'categories',{silent:true});
			this.mainModel.trigger("change:detail");
			this.app.mainRegion.show(new RightView({
				model:this.mainModel
			}));
            NProgress.done();
		},
		tags:function(query){
			NProgress.start();
			this.mainModel.set("type",'tags',{silent:true});
			this.mainModel.trigger("change:detail");
			this.app.mainRegion.show(new RightView({
				model:this.mainModel
			}));
            NProgress.done();
		},
		detail:function(query){
			NProgress.start();
			this.mainModel.set("type",'detail',{silent:true});
			this.mainModel.trigger("change:detail");
			this.app.mainRegion.show(new RightView({
				model:this.mainModel,
				title:query
			}));
            NProgress.done();
		}
	});
	
	return Controller;
});