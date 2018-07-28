// 用对象传参， 不用考虑引用顺序的问题，不用考虑是否必传
function Glass(obj) {
    // 展示图片的盒子
    this.$showImage = document.querySelector(obj.showBox)
    this.$ulbox = document.querySelector(obj.ulBox)
    this.ratio = obj.ratio
    // 放大镜
    this.$smallBox = null
    // 展示大图的盒子
    this.$bigBox = null
    this.smallBoxWidth = obj.width || 100
    this.smallBoxHeight = obj.height || 100
}
Glass.prototype.init = function() {
    var _this = this
    // 创建放大镜
    this.createFilter(this.smallBoxWidth, this.smallBoxHeight)
    // 创建大图片显示区域
    this.createShow();
    // 默认显示第一张
    this.showImage(0)
    // 移入展示图片的盒子
    // gongneng
     this.$showImage.onmouseover = function() {
        _this.$smallBox.style.display = 'block';
        _this.$bigBox.style.display = 'block';

    }
    // 鼠标移出隐藏小盒子
     this.$showImage.onmouseout = function() {
        _this.$smallBox.style.display = 'none';
        _this.$bigBox.style.display = 'none';
    }
    // 鼠标在展示盒子里面移动
    // 【功能】
    // 让放大镜跟随鼠标移动
    // 让展示区域的大图跟随移动
     this.$showImage.onmousemove = function(ev) {
        ev = ev || window.event
        // 获取移动后，小盒子的位置
        var l = ev.clientX -  _this.$showImage.offsetLeft - _this.$smallBox.offsetWidth / 2
        var t = ev.clientY -  _this.$showImage.offsetTop - _this.$smallBox.offsetHeight / 2
        _this.moveBox(l, t)
    }
    var libox = this.$ulbox.querySelectorAll('li')
    for(var i = 0; i < libox.length; i++) {
        libox[i].index = i
        libox[i].onclick = function() {
            _this.showImage(this.index);
        }
    }
}
// 创建图片展示区域（放大后的图片展示区域）
Glass.prototype.createShow = function() {
    var div = document.createElement('div');
    // 设置盒子初始位置（每次显示在展示图片的盒子的右边10像素）
    div.style.left = this.$showImage.offsetLeft + this.$showImage.offsetWidth + 10 + 'px'
    div.style.top =  this.$showImage.offsetTop + 'px'
    div.style.width = parseInt(this.$smallBox.style.width) * this.ratio + 'px'
    div.style.height = parseInt(this.$smallBox.style.height) * this.ratio + 'px'
    div.className = 'show-image__big';
    this.$bigBox = div
    var img = document.createElement('img');
    img.style.width = this.$showImage.offsetWidth * this.ratio + 'px'
    div.appendChild(img)
    document.body.appendChild(div)
}
Glass.prototype.createFilter = function(width = 100, height = 100) {
    var div = document.createElement('div');
    div.style.width = width + 'px'
    div.style.height = height + 'px'
    div.className = 'box__small';
    // 创建放大镜，把地址赋值给$smallBox属性
    this.$smallBox = div
    this.$showImage.appendChild(div);
}
Glass.prototype.showImage = function(index) {
    var libox = this.$ulbox.querySelectorAll('li')
    for(var i = 0; i < libox.length; i++) {
        libox[i].className = ''

    }
    libox[index].className = 'active'
    // 获取图片展示地址
    var src = libox[index].querySelector('img').src
    // 根据图片规律，替换小图片的地址
    this.$showImage.querySelector('img').src = src.replace('small', 'big');
    this.$bigBox.querySelector('img').src = src.replace('small', 'largest')
}

Glass.prototype.moveBox = function(l,t) {
    var maxL =  this.$showImage.clientWidth - this.$smallBox.offsetWidth
    var maxT =  this.$showImage.clientHeight - this.$smallBox.offsetHeight
    //边界处理
    if(l > maxL) {
        l = maxL
    } else if(l < 0) {
        l = 0
    }
    if(t > maxT) {
        t = maxT
    } else if (t < 0) {
        t = 0
    }
    // 移动小盒子
    this.$smallBox.style.left = l + 'px'
    this.$smallBox.style.top = t + 'px'
    // 移动大图片
    this.$bigBox.querySelector('img').style.left = -this.ratio * l + 'px'
    this.$bigBox.querySelector('img').style.top = -this.ratio * t + 'px'
}
