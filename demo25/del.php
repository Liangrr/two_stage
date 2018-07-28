<?php
    echo "<script>
    			function auto(_table,index){
    				_table.onclik = function(e){
    					e = e || window.event;
    					var tar = e.target || e.srcElement;
    					if(tar.className == 'delBtn'){
    						tar.parentNode.parentNode.removeChild(_t);
    					}
    				}
                    
                    window.location.href = 'login.php';
                }    
               </script>";
?>