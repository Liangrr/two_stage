//			模拟百度搜索框
//			1. 输入内容后出现下拉框
//			2. 点击下拉框,文本框显示点击内容
//			3. 文本内容为空后,下拉框隐藏
//			4.点击空白处,下拉框也隐藏
//			5.点击搜索,或者按enter键,进行页面跳转,跳转连接要包含查询内容
	
	var inp = document.getElementById('inp');
	var search = document.getElementById('btn');
	var find_ul = document.getElementById('find_ul');
	var liAll = document.querySelectorAll('li');
	
//	当input有文本输入的时候进行
	inp.oninput = function (){
//		如果inp不为空
		if (inp.value!='') {
//			把ul显示
			find_ul.style.display = 'block';
		} else{
//			隐藏
			find_ul.style.display = 'none';
		}
	}
	
//	鼠标点击document,ul进行隐藏
	document.onclick = function (){
		find_ul.style.display = 'none';
	}
//	查找按键点击的时候
	search.onclick = function(){
//		把输入框的值给浏览器，在地址栏显示
		window.location.search=inp.value;
	}
	inp.onkeydown  = function (e){
		e = e || window.event;
//		判断ascii码值
		if(e.keyCode==13){
			window.location.href='new.html';
		}
	}
//		运用事件委托原理
		find_ul.onclick = function(ev){
			ev = ev || window.event
//			点击的li的innerHTML值赋给输入框
			inp.value =	ev.target.innerHTML;
		}