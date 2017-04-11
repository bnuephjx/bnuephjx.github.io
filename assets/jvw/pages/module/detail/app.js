define(function(require){
	var Marionette = require("marionette");
	var tmpl = require("text!./app.html");
	var tmpl1 = require("text!./templates/create_leftView_3.html");
	
	var DetailView = Marionette.LayoutView.extend({
		template:_.template(tmpl),
		className:'article',
		initialize:function(options){
			this.options = options || {};
			this.listenTo(this.model,"change:detail",this.replaceTmpl);
		},
		onRender:function(){
			this.replaceTmpl();
		},
		replaceTmpl:function(title){
			if(this.options.title && this.options.title!=undefined){
				this.$el.html(_.template(tmpl1))
			}
		}
	});
	
	return DetailView;
})