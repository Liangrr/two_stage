// 3. 字母数字混合6位验证码，至少有一位字母，至少有一位数字
			function ascRan(){
				var arr = [];
				for (var i=0;i<1000;i++) {
					var ascNum = Math.floor(Math.random()*123);
					if ((ascNum>47&&ascNum<58)||(ascNum>64&&ascNum<91)||(ascNum>96&&ascNum<123)) {
						var num = String.fromCharCode(ascNum);
						arr.push(num);
					} 
				}
				for (var j=0;j<arr.length;j++) {
					var numAsc_j = arr[j].charCodeAt();
					if ((numAsc_j>64&&numAsc_j<91)||(numAsc_j>96&&numAsc_j<123)) {
						for (var k=0;k<arr.length;k++) {
							var numAsc_k = arr[k].charCodeAt();
							if (numAsc_k>47&&numAsc_k<58) {
								return '你的六位验证码:'+arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5];
							}
						}
					}else if(numAsc_j>47&&numAsc_j<58){
						var numAsc_j = arr[j].charCodeAt();
						for (var k=0;k<arr.length;k++) {
							var numAsc_k = arr[k].charCodeAt();
							if ((numAsc_k>64&&numAsc_k<91)||(numAsc_k>96&&numAsc_k<123)) {
								return '你的六位验证码:'+arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5];
							}
						}
					} else{
						return '你的六位验证码有误';
					}
				}
				
			}