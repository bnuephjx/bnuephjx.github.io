define("views/mainView",function(require){
	var Marionette = require("marionette");
	
	var NProgress = require("nprogress");
	
	var tmpl = require("text!templates/mainView.html");
	var MainModel = require("models/main");
	
	var SideBarView = require("../module/sidebar/app");
	var RightView = require("views/rightView");
	
	var MainView = Marionette.LayoutView.extend({
		template:_.template(tmpl),
		className:'container',
//		regions:{
//			sidebarRegion:'.js-sidebar-region',
//			rightRegion:'.js-right-region'
//		},
		initialize:function(options){
			this.options = options || {};
			this.model = new MainModel();
		},
		onRender:function(){
//			this.renderSideBar();
//			this.renderRight();
		},
		renderSideBar:function(){
			this.sidebarRegion.show(new SideBarView({
				model:this.model
			}));
		},
		renderRight:function(){
			this.rightRegion.show(new RightView({
				model:this.model
			}));
		}
	});
	
	return MainView;
});