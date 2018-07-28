define(['jquery'],function($){
	var $box = $('#box');
	var $uubox = $('#uu');
	var timer = null;
	return {
		init(){
			this.events();
			this.autoPlay();
		},
		events(){
			var _this = this;
			$uubox.on('click','li',function(){
				_this.showImg($(this).index());
				_this.autoPlay($(this).index());
			})
		},
		showImg(index){
			$uubox.children('li').eq(index).addClass('current').siblings().removeClass('current');
			$box.children('li').eq(index).fadeIn().siblings().fadeOut();
		},
		autoPlay(index){
			var _this = this;
			index = index || 0;
			clearInterval(timer);
			timer = setInterval(function(){
				index++;
				if (index == $($uubox).children('li').length) {
					index = 0;
				}
				_this.showImg(index);
			},1000);
		}
	}
})
