//	题目1:	
			//方法1
			function A(){
				var	a=10;
				var	b=5;
				a=b;
				return a;
			}
			function B(){
				var	a=10;
				var	b=5;
				b=a;
				return b;
			}			
			
			//方法二
			function getAB(a,b){
				console.log(b);
				a=b;
				return a;
			}

//	题目2:	定义三个参数
			function getABC(a,b,c){
				//把参数值传到数组内
				var array = new Array(a,b,c);
				//调用数组的sort排序方法
				//然后需要一个函数判断，再次定义形参xy
				array.sort(function(x,y){
					//如果为负值排在前面，正值在后面
					return parseInt(x)-parseInt(y);
				});
				document.write(array+"  ");
			}
			
//	题目3:

			function getYear(m,n){
				//获取年期间
				var sum = 0;
				for (var year=m;year<=n;year++) {
					//判断是不是闰年，是就输出
					if(year%4==0&&year%100!=0||year%400==0){
						document.write('&nbsp'+year+'&nbsp');
						sum++;
						if (sum%4==0) {
							document.write('<br />');
						}
					}
				}
			}
			
//	题目4:
			function getSushu(m,n){
				for (var i=m;i<=n;i++) {
					//除了1和他本身，所以取2和不等
					for (var j=2;j<i;j++) {
						//如果求余为0，证明在2到(本身-1）之间能有数被整除
						if(i%j==0){
							//跳出
							break;
						}
					}
					//如果上面都没有则执行此语句，必然能除以自身，故为素数
					if(i==j){
						console.log(i);
					}
				}
				
			}
//	题目5:			
			function getDrop(m){
				var num=0;
				for (var i = m;i>0.1;i=i*0.3) {
					num++;
				}
				console.log(num);
			}