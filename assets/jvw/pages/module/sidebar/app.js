define(function(require){
	var Marionette = require("marionette");
	var tmpl = require("text!./app.html");

	var PagesNavView = require("../pagesnav/app");

	var SideBarView = Marionette.LayoutView.extend({
		template:_.template(tmpl),
		className:'sidebar',
		events:{
			'click .cd-stretchy-nav':'handleNav',
			'click .js-stretchy-nav-item':'handleRender'
		},
		regions:{
			pagesnavRegion:'.js-pages-region'
		},
		initialize:function(options){
			this.options = options || {};
			this.listenTo(this.model,"change:detail",this.renderPages);
		},
		serializeData:function(){
			var data = _.extend({},this.model.toJSON());
			return data
		},
		handleNav:function(e){
			var btn = $(e.currentTarget);
			if(btn.hasClass("nav-is-visible")){
				btn.removeClass("nav-is-visible");
			}else{
				btn.addClass("nav-is-visible");
			}
		},
//		handleRender:function(e){
//			var btn = $(e.currentTarget);
//			var _type = btn.data("type");
//			this.model.set("type",_type,{silent:true});
//			this.model.trigger("change:render",_type);
//		},
		renderPages:function(){
			if(this.model.get("type")=="detail"){
				this.pagesnavRegion.show(new PagesNavView())
			}else{
				this.pagesnavRegion.empty();
			}
		}
	});

	return SideBarView;
})