(function($){
	$.fn.goTop = function(options){
		var settings = {
			fromTopShow:0,//到哪里的时候显示
			goTop:0,//移动那个位置
			speed:500,//速度
			isClick:true
		}
		if(options){
			settings = $.extend(settings,options);
		}
		
		var _this = this;
		//监听滚动条
		$(window).scroll(function(){
			var sc = $(window).scrollTop();//距离顶部
			if( sc > settings.fromTopShow){
				$(_this).show(100);
			}else{
				$(_this).hide(100);
			}
		});
		
		$(this).click(function(e){ 
			e.preventDefault();
			if(settings.isClick){
				settings.isClick = false;
				$('html, body').animate({scrollTop:settings.fromTopShow}, settings.speed,function(){
					settings.isClick = true;
				});
			}else{
				return false;
			}
	    });
	}
})(jQuery)
