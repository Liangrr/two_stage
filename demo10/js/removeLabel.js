//			删除一个你输入标签名的标签
			function removeNode(node){
//				获取标签,然后取得父级
				var nodeParent = document.querySelector(node).parentNode;
//				父级调用删除子元素方法,子元素是上面获取的标签
				return  nodeParent.removeChild(document.querySelector(node));
			}