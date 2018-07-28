//	分别传入最大盒子,图片的父级,图片集合,点的父级,点的集合,左右键
	var loupe = document.querySelector('.loupe');
	var picAll = document.querySelector('.picAll');
	var imgs = document.querySelectorAll('.picAll img');
	var dotAll = document.querySelector('.dotAll');
	var lis = document.querySelectorAll('.dotAll li');
	var leftBtn = document.getElementById('left');
	var rightBtn = document.getElementById('right');
//	定时器
	var timer;
//	全局变量index
//	var index=0;
	
//	调用初始和自动播放函数
	init(picAll);
	autoPlay(picAll,leftMove)
//	左键按下
	leftBtn.onclick = function(){
		leftMove(picAll)
		autoPlay(picAll,leftMove);
	}
//	右键按下
	rightBtn.onclick = function(){
		rightMove(picAll);
		autoPlay(picAll,rightMove);
	}
//	初始化函数
	function init(element){
//		获得第一个元素的宽度
		var wid = element.firstElementChild.offsetWidth;
//		把最后一个元素插到第一个前面
		element.insertBefore(element.lastElementChild,element.firstElementChild);
//		固定位置
		element.style.left = -wid + 'px';
	}
//	左移函数
	function leftMove(element){
//		获得第一个元素的宽度		
		var wid = element.firstElementChild.offsetWidth;
//		startMove调用封装好的sport的函数，并传入四个参数
		startMove(element,-wid*2,1000,'left',function(element){
//			把第一个元素加到element的最后
			element.appendChild(element.firstElementChild);
//			固定位置
			element.style.left = -wid + 'px';
		});
	}
//	右移函数
	function rightMove(element){
//		获得第一个元素的宽度		
		var wid = element.firstElementChild.offsetWidth;
//		startMove调用封装好的sport的函数，并传入四个参数		
		startMove(element,0,1000,'left',function(element){
//			把最后一个元素插到第一个元素前
			element.insertBefore(element.lastElementChild,element.firstElementChild);
//			固定位置
			element.style.left = -wid + 'px';
		});
	}
	
	function autoPlay(element,callback){
//		获得第一个元素的宽度
		var wid = element.firstElementChild.offsetWidth;
//		清除定时器
		clearInterval(timer);
		timer = setInterval(function(){
//			showPage(element);
//			回调
			callback(element);
		},2000);
	}
	
	
//	function showPage(element){
//		var wid = element.firstElementChild.offsetWidth;
//		var lis = element.parentNode.children[1].children;
//		console.log(lis)
//		if (index==(element.childElementCount+1)) {
//			index = 0;
//		}else if(index==-1){
//			index = element.childElementCount;
//		}
//		for (var i = 0;i<element.childElementCount;i++) {
//				lis[i].className = '';
//		}
//		lis[index].className = 'active'
//		console.log(index)
//		startMove(element,-wid*index,100,'left')
//	}
