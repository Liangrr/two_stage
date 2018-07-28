define([
    'jquery'
], function($) {
    var $box = $('#box');
    var $uubox = $('#uu');
    var timer = null;
    return {
        init() {
            this.events();
            this.atuoPlay();
        },
        events() {
            var _this = this;
            $uubox.on('click', 'li', function() {
                _this.showImage($(this).index())
                _this.atuoPlay($(this).index());
            })
            
        },
        showImage(index) {
            $uubox.children('li').eq(index).addClass('current').siblings().removeClass('current');
            $box.children('li').eq(index).fadeIn().siblings().fadeOut();
        },
        atuoPlay(index) {
            index = index || 0;
            var _this = this;
            clearInterval(timer);
            timer = setInterval(function() {
                index++;
                if(index >= $uubox.children('li').length) {
                    index = 0;
                }
                _this.showImage(index);

            }, 2000)
        }
    }
});