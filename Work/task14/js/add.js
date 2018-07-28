		var inp = document.querySelectorAll('input');
		var hint = document.querySelectorAll('b');
		
		inp[0].onblur = function() {
			check(0, inp[0].value)
		}
		inp[1].onblur = function() {
			check(1, inp[1].value)
		}		
		inp[2].onblur = function() {
			check(2, inp[2].value)
		}
		inp[3].onblur = function() {
			check(3, inp[3].value)
		}
		
		function check(index, val) {
			var arr = [/^[\u4e00-\u9fa5]{2,4}$/,/^1[35789]\d{9}$/,/^\w{6,15}$/,/^\w{6,15}$/];
			if (index==3) {
				if (arr[index].test(val) && val == inp[index-1].value) {
					hint[index].innerText = '你的输入正确';
			   	    hint[index].style.color = 'greenyellow';
				}else {
					hint[index].innerText = '你的输入有误';
					hint[index].style.color = 'red';
				}
			} else if(arr[index].test(val)) {
				hint[index].innerText = '你的输入正确';
				hint[index].style.color = 'greenyellow';
			} else {
				hint[index].innerText = '你的输入有误';
				hint[index].style.color = 'red';
			}
		}	

//		sub.onclick = function(){
//			check(0, inp[0].value)
//			check(1, inp[1].value)
//			if(a && b) {
//				{
//					
//				}
//					inp[0].value)
//					inp[1].value
//			}
//			inp[0].value
//			inp[1].value
//			inp[2].value
//			inp[3].value
//		}