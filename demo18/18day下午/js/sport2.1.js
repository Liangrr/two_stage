function startMove(ele, target, time, attr, callback) {
    clearInterval(ele.timer);
    // 获取属性值，得到的值是字符串，需要转换
    var init = parseFloat(getStyle(ele, attr));
    // 根据目标值，获取速度是否为正
    var speed = target > init ? 10 : -10;
    // 如果目标值和初始值相同，停止运动
    if(target == init) {
        return
    }
    // 获取每次运行的时间
    var _time = time /((target - init) / speed);
    // 设置定时器
    ele.timer = setInterval(function() {
         // 获取每次运动结束后，该属性的位置值
         // 这里默认把速度值加入在最后面，方便判断极限值
        var  _init =  parseFloat(getStyle(ele, attr)) + speed;
        // 判断条件一共两种
        // 第一种： 当目标值大于初始值，每次运动后的距离大于目标值后，就要停止运动
        // 第二种： 当目标值小于初始值，每次运动后的距离小于目标值后，就要停止运动
        if((target > init && _init > target) || (target < init && _init < target)) {
            // 当超过边界时，把边界值赋值给运动值，防止超出边界
            _init = target;
            clearInterval(ele.timer);
            if(callback) {
                callback(ele);
                return
            }
        }
        ele.style[attr] = _init + 'px';
    }, _time)
}
function moveVertical(ele, target, time, callback) {
    startMove(ele, target, time, 'top', callback);
}
function moveHorizontal(ele, target, time, callback) {
    startMove(ele, target, time, 'left', callback);
}
function getStyle(ele, attr) {
    return window.getComputedStyle ? window.getComputedStyle(ele, null)[attr] : ele.currentStyle[attr];
}