        // 构造函数模式123
        function Fn(ele, boxEle) {
            // 获取dom元素
            // 验证的文本框
            this.element = document.querySelector(ele);
            // 插入内容的盒子
            this.boxElement = document.querySelector(boxEle);
            this.list = []
        }
        // 原型链模式
        // 当文本内容为提示字符的时候，清空文本框
        Fn.prototype.clearInp = function(ele) {
            ele.style.color = '#000';
            ele.nextElementSibling.style.display = 'none'
            if(ele.value == '请输入内容') {
                ele.value = ''
            }
        }
        // 当文本框内容为空时，显示提示文字（模仿placeholder功能）
        Fn.prototype.initInp =  function (ele) {
            if(ele.value == '') {
                ele.value = '请输入内容'
                ele.style.color = '#ccc';
            }
        }
        // 检测文本内容
        Fn.prototype.checkInp =  function (ele) {
            var reg = /^([\u4e00-\u9fa5]|\w)+$/
            if(reg.test(ele.value)) {
                // 每次把符合条件的内容，加入到数组内
                this.list.push({value: ele.value});
                // 修改数组数据后，渲染dom，显示新的数据结构
                this.insertDate(this.list);
                ele.value = '' // 清空文本框
            } else {
                ele.nextElementSibling.style.display = 'inline'
            }
        }
        Fn.prototype.init = function(json) {
            var _this = this
            if(json.length > 0) {
                this.insertDate(json)
            }
            this.element.onfocus = function() {
                _this.clearInp(this);
            }
            this.element.onblur = function() {
                _this.initInp(this);
            }
            this.element.onkeydown = function(ev) {
                ev = ev || window.event;
                var keyCode = ev.keyCode || ev.which;
                if(keyCode == 13) {
                    _this.checkInp(this)
                }
            }
            this.boxElement.onclick = function(ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.className == 'close') {
                    console.log('关闭')
                    _this.delDate(target.index);
                }
            }
        }
        Fn.prototype.delDate = function (index) {
            this.list.splice(index, 1);
            this.insertDate(this.list);
        }
        Fn.prototype.insertDate = function(arr) {
            // 如果传入新数据，让老数据与新数据保持同步
            this.list = arr; // 【可以尝试不写这一句，看看有什么问题】
            // 清空原本的内容，不然每次都把上一次的内容加入
            this.boxElement.innerHTML = ''
            for(var i = 0; i < arr.length; i++ ) {
                var li = document.createElement('li');
                li.className = 'libox-item';
                li.innerHTML = arr[i].value;
                // 添加删除按钮【样式提前写在样式表里】
                var span = document.createElement('span');
                // 这里给每个元素添加一个index，方便日后删除使用
                span.index = i;
                span.className = 'close';
                span.innerHTML = 'X'
                li.appendChild(span);
                this.boxElement.appendChild(li);
            }
        }