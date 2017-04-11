define("router",function(require){
	var Marionette = require("marionette");
	
	var Router = Marionette.AppRouter.extend({
		appRoutes:{
			"home":"index",
			"archives":"archives",
			"archives/*query":"archives",
			"categories":"categories",
			"categories/*query":"categories",
			"tags":'tags',
			"tags/*query":'tags',
			"detail/*query":'detail',
			"*error":"index"
		}
	});
	
	return Router;
});