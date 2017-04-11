define("models/main",function(require){
	var Backbone = require("backbone");
	var MainModel  = Backbone.Model.extend({
		defaults:{
			type:'index',//页面的类型
		}
	})
	return MainModel;
})
