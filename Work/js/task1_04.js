function getData4(){
			var year =parseInt(prompt('输入今年是哪年？'));
			var month =parseInt(prompt('输入今年是哪月？')); 
			var day =parseInt(prompt('输入今年是哪日？'));
			var tatalDay=0;
				switch (month){
					case 12:
						tatalDay += 30;
					case 11:
					    tatalDay += 31;
					case 10:
						tatalDay += 30;
					case 9:
					    tatalDay += 31;
				    case 8:
						tatalDay += 31;
					case 7:
					    tatalDay += 30;
					case 6:
						tatalDay += 31;
				    case 5:
						tatalDay += 30;
					case 4:
						tatalDay += 31;
				    case 3:
					    if(year%4==0&&year%100!=0||year%400==0){
					    	tatalDay += 29;
						}else{
							tatalDay += 28;
						}
					case 2:
						tatalDay += 31;
				    case 1:
						tatalDay += day;
						break;
				}
				alert("今年的第"+tatalDay+'天')
}
