// 元素 距离， 回掉函数
function speedUp(ele, distance, callback) {
    clearInterval(timer)
    var speed = -2;
    timer = setInterval(function(){
        var maxTop = top + speed
        if (maxTop < distance) {
            $div.style.top = distance + 'px';
            clearInterval(timer);
            callback()
        } else {
            $div.style.top = maxTop + 'px';
        }
    }, 10)
}
function speedDown(ele, distance, callback) {
    clearInterval(timer)
    // debugger
    var speed = 2;
    timer = setInterval(function() {
        var top = $div.offsetTop;
        var maxTop = top + speed
        if (maxTop > distance) {
            $div.style.top = distance + 'px';
            clearInterval(timer);
            callback()
        } else {
            $div.style.top = maxTop + 'px';
        }
    }, 10)
}
function speedLeft(ele, distance, callback) {
    clearInterval(timer)
    callback = callback || function(){}
    var speed = -2;
    timer = setInterval(function() {
        var left = ele.offsetLeft;
        var maxSpeed = left + speed
        if(maxSpeed < distance) {
            ele.style.left = distance + 'px';
            clearInterval(timer)
            // 
            callback()
        } else {
            ele.style.left = maxSpeed + 'px';
        }
    }, 10)    
}
function speedRight(ele, distance, callback) {
    clearInterval(timer)
    callback = callback || function(){}
    var speed = 2;
    timer = setInterval(function() {
        var left = ele.offsetLeft;
        var maxSpeed = left + speed
        if(maxSpeed > distance) {
            ele.style.left = distance + 'px';
            clearInterval(timer)
            // 
            callback()
        } else {
            ele.style.left = maxSpeed + 'px';
        }
    }, 10)
}