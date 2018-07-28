			function getDate(date) {
				var year = parseInt((date/ 10000));
				var month = (parseInt(date/ 100) % 100);
				var day = (date% 100);
				if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
					
					switch(month) {
						case 1:
							alert('今年的' + day + '天');
							break;
						case 2:
							alert('今年的' + (day + 31) + '天');
							break;
						case 3:
							alert('今年的' + (day + 31 + 29) + '天');
							break;
						case 4:
							alert('今年的' + (day + 31 + 29 + 31) + '天');
							break;
						case 5:
							alert('今年的' + (day + 31 + 29 + 31 + 30) + '天');
							break;
						case 6:
							alert('今年的' + (day + 31 + 29 + 31 + 30 + 31) + '天');
							break;
						case 7:
							alert('今年的' + (day + 31 + 29 + 31 + 30 + 31 + 31) + '天');
							break;
						case 8:
							alert('今年的' + (day + 31 + 29 + 31 + 30 + 31 + 31 + 30) + '天');
							break;
						case 9:
							alert('今年的' + (day + 31 + 29 + 31 + 30 + 31 + 31 + 30 + 31) + '天');
							break;
						case 10:
							alert('今年的' + (day + 31 + 29 + 31 + 30 + 31 + 31 + 30 + 31 + 30) + '天');
							break;
						case 11:
							alert('今年的' + (day + 31 + 29 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) + '天');
							break;
						case 12:
							alert('今年的' + (day + 31 + 29 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 + 30) + '天');
							break;
						default:
							break;
					}
				} else {

					switch(month) {
						case 1:
							alert('今年的' + day + '天');
							break;
						case 2:
							alert('今年的' + (day + 31) + '天');
							break;
						case 3:
							alert('今年的' + (day + 31 + 28) + '天');
							break;
						case 4:
							alert('今年的' + (day + 31 + 28 + 31) + '天');
							break;
						case 5:
							alert('今年的' + (day + 31 + 28 + 31 + 30) + '天');
							break;
						case 6:
							alert('今年的' + (day + 31 + 28 + 31 + 30 + 31) + '天');
							break;
						case 7:
							alert('今年的' + (day + 31 + 28 + 31 + 30 + 31 + 31) + '天');
							break;
						case 8:
							alert('今年的' + (day + 31 + 28 + 31 + 30 + 31 + 31 + 30) + '天');
							break;
						case 9:
							alert('今年的' + (day + 31 + 28 + 31 + 30 + 31 + 31 + 30 + 31) + '天');
							break;
						case 10:
							alert('今年的' + (day + 31 + 28 + 31 + 30 + 31 + 31 + 30 + 31 + 30) + '天');
							break;
						case 11:
							alert('今年的' + (day + 31 + 28 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) + '天');
							break;
						case 12:
							alert('今年的' + (day + 31 + 28 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 + 30) + '天');
							break;
						default:
							break;
					}
				}
			}