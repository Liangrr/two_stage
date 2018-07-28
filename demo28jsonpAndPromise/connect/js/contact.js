		var chat = document.querySelector('.chat');
		var show_ul = document.getElementById('show_ul');
		var inTxt = document.getElementById('inTxt');
		var btnSend = document.getElementById('send');
		
		btnSend.onclick = function (){
			send(inTxt.value);
			ajax(inTxt.value,'kf');
		}
		
		inTxt.onkeydown = function (e){
			e = e || window.event;
			console.log(e.keyCode);
			if(e.keyCode==13){
				send(inTxt.value);
				ajax(inTxt.value,'kf');
			}
		}
		
		function send(txt){
//			如果textarea的值不为空
			if (txt!= '') {
				chatContent(txt,'kh');
			}
		}
//		定义一个客服和客户调用输出li的公共函数
		function chatContent(txt,imgName){
			var liAll = document.querySelectorAll('li');
//			创建li,img,span,p
			var li = document.createElement('li');
			var	img = document.createElement('img');
			var	span = document.createElement('span');
			pTime = document.createElement('p');
//			p从getDate()函数中获取时间
			pTime.innerHTML = getDate()+'';
//			赋值
			img.src = 'img/'+imgName+'.jpg';
//			把textarea的值给span进行输出
			span.innerHTML = txt ;
//			把img,span加到li（顺序有问题，先图片在文本）,再把li加到ul
			li.appendChild(img);
			li.appendChild(span);
//				p加到ul
			show_ul.appendChild(pTime);
			show_ul.appendChild(li);
//			执行完上面的操作之后,对textarea进行清空
			if (liAll.length%2!=0) {
				inTxt.value = '';
			}
//				隐藏的高度等于 总高度
			show_ul.scrollTop = show_ul.scrollHeight - show_ul.clientHeight;
		}
		
		function ajax(val,imgName){
			var xhr = new XMLHttpRequest();
			xhr.open('GET','http://www.tuling123.com/openapi/api?key=dfe5401f5ec44c6db891a3eeaa309bca&info='+val,true);
			xhr.send(null);
			xhr.onreadystatechange = function(){
				if (xhr.readyState === 4&& xhr.status === 200) {
					var json = xhr.responseText;
					json = JSON.parse(json);
					var reg = /^4\d{4}$/g;
					if (!reg.test(json.code)) {
						chatContent(json.text,imgName);
					}else{
						alert('报错！');
					}
				
				}
			}
		}