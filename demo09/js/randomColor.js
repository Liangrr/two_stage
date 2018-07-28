			function maxRandom(max,min){
				min = min || 0;
				return Math.round(min+Math.random()*(max-min));
			}
			function returnColor(){
				var color = '#';
				var str = '0123456789abcdef';
				for (var i=0;i<6;i++) {
					color = color + str[maxRandom(str.length-1)];
				}
				return color;
			}
//			console.log(returnColor());