define("views/rightView",function(require){
	var Marionette = require("marionette");
	
	var NProgress = require("nprogress");
	
	var tmpl = require("text!templates/rightView.html");
	
	var TopBarView = require("../module/topbar/app");
	var GridListView = require("../module/gridlist/app");
	var TiemLineView = require("../module/timeline/app");
	var DetailView = require("../module/detail/app");
	
	var RightView = Marionette.LayoutView.extend({
		template:_.template(tmpl),
		className:'main',
		initialize:function(options){
			this.options = options || {};
			this.type = this.options.type;
			this.listenTo(this.model,"change:render",this.render);
		},
		serializeData:function(){
			var data = _.extend({},this.model.toJSON());
			return data
		},
		onRender:function(){
			NProgress.start();
			this.renderRegion(this.model.get("type"));
			NProgress.done();
		},
		renderRegion:function(type){
			var view = this;
			switch (type){
				case 'index':
					view.renderTopBar();
					view.renderGridList();
					break;
				case 'archives':
					view.renderTopBar();
					view.renderTimeLine();
//					window.route.navigate('#archives',{trigger:false});
					break;
				case 'categories':
					view.renderTopBar();
					view.renderTimeLine();
//					window.route.navigate('#categories',{trigger:false});
					break;
				case 'tags':
					view.renderTopBar();
					view.renderTimeLine();
//					window.route.navigate('#tags',{trigger:false});
					break;
				case 'detail':
					view.renderDetail();
					break;
				default:
					console.log("不存在");
					break;
			}
		},
		renderTopBar:function(){
			this.addRegions({
				topbarRegion:'.js-topbar-region'
			});
			this.topbarRegion.show(new TopBarView({
				model:this.model
			}))
		},
		renderGridList:function(){
			this.addRegions({
				gridlistRegion:'.js-gridlist-region'
			});
			this.gridlistRegion.show(new GridListView({
				model:this.model
			}))
		},
		renderTimeLine:function(){
			this.addRegions({
				timelineRegion:'.js-timeline-region'
			});
			this.timelineRegion.show(new TiemLineView({
				model:this.model
			}))
		},
		renderDetail:function(){
			this.addRegions({
				detailRegion:'.js-detail-region'
			});
			this.detailRegion.show(new DetailView({
				model:this.model,
				title:this.options.title
			}))
		}
	});
	
	return RightView;
});
