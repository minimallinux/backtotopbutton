window.onscroll = function() {scrollFunction()};
  	function scrollFunction(){
		/*Change timer to suit page size*/
  	    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
  	        document.querySelector("#topBtn").style.display = "block";
  	    } else {
  	        document.querySelector("#topBtn").style.display = "none";
  	    }

  	}
  	function topFunction() {
      	document.body.scrollTop = 0;
      	document.documentElement.scrollTop = 0;
  	}

