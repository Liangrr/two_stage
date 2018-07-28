define(['jquery'], function($) {
    return {
        sayHello() {
            console.log('sayHello');
        },
        setColor() {
            $('.box').css('background', '#000');
        }
    }
});