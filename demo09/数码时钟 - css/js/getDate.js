			function getGap(){
//				获取所有图片,这个是个类数组
				var imgs =  document.querySelectorAll('img');
//				获取当前时间
				var timeGap = new Date();
//				分别获取秒分时
				var second = timeGap.getSeconds();
				var minute = timeGap.getMinutes();
				var hour   = timeGap.getHours();
//				字符串拼接方式获取图片
				imgs[0].src = 'img/'+parseInt(hour/10)+'.png';
				imgs[1].src = 'img/'+hour%10+'.png';
				imgs[2].src = 'img/'+parseInt(minute/10)+'.png';
				imgs[3].src = 'img/'+minute%10+'.png';
				imgs[4].src = 'img/'+parseInt(second/10)+'.png';
				imgs[5].src = 'img/'+second%10+'.png';
//				返回值
				return hour+'时'+minute+'分'+second+'秒';
			}