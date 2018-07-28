        // 构造函数模式
        function Fn(ele) {
            // 获取dom元素
            this.element = document.querySelector(ele);
        }
        // 原型链模式
        Fn.prototype.clearInp = function(ele) {
            ele.style.color = '#000';
            ele.nextElementSibling.style.display = 'none'
            if(ele.value == '请输入内容') {
                ele.value = ''
            }
        }
        Fn.prototype.initInp =  function (ele) {
                    if(ele.value == '') {
                        ele.value = '请输入内容'
                        ele.style.color = '#ccc';
                    }
        }
        Fn.prototype.checkInp =  function (ele) {
            var reg = /^1[35789]\d{9}$/
            if(reg.test(ele.value)) {
                var li = document.createElement('li')
                li.innerHTML = ele.value
                ulBox.appendChild(li);
                ele.value = ''
            } else {
                ele.nextElementSibling.style.display = 'inline'
            }
        }
        Fn.prototype.init = function() {
            this.element.onfocus = function() {
                _fn.clearInp(this);
            }
            this.element.onblur = function() {
                _fn.initInp(this);
            }
            this.element.onkeydown = function(ev) {
                ev = ev || window.event;
                var keyCode = ev.keyCode || ev.which;
                if(keyCode == 13 && ev.ctrlKey) {
                    _fn.checkInp(this)
                }
            }
        }