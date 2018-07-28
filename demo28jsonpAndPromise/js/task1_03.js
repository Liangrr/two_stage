function getData3(){
			var year =parseInt(prompt('输入今年是哪年？'));
			var month =parseInt(prompt('输入今年是哪月？')); 
			
			if(year%4==0&&year%100!=0||year%400==0){
				switch (month){
					case 1:
						alert('一月为31天');
						break;
					case 2:
						alert('二月为29天');
						break;
					case 3:
						alert('三月为31天');
						break;
					case 4:
						alert('四月为30天');
						break;
					case 5:
						alert('五月为31天');
						break;
					case 6:
						alert('六月为30天');
						break;
					case 7:
						alert('七月为31天');
						break;
					case 8:
						alert('八月为31天');
						break;
					case 9:
						alert('九月为30天');
						break;
					case 10:
						alert('十月为31天');
						break;
					case 11:
						alert('十一月为30天');
						break;
					case 12:
						alert('十二月为31天');
						break;
					default:
						break;
				}
			}else{
				switch (month){
					case 1:
						alert('一月为31天');
						break;
					case 2:
						alert('二月为28天');
						break;
					case 3:
						alert('三月为31天');
						break;
					case 4:
						alert('四月为30天');
						break;
					case 5:
						alert('五月为31天');
						break;
					case 6:
						alert('六月为30天');
						break;
					case 7:
						alert('七月为31天');
						break;
					case 8:
						alert('八月为31天');
						break;
					case 9:
						alert('九月为30天');
						break;
					case 10:
						alert('十月为31天');
						break;
					case 11:
						alert('十一月为30天');
						break;
					case 12:
						alert('十二月为31天');
						break;
					default:
						break;
				}
			}

}			