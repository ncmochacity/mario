$(document).ready(function(){
	
	$(document).keydown(function(key){
		switch(parseInt(key.which,10))
		{
			//left
			case 37:
				$("img").animate({left:"-=10px"},"fast");
			break;

			//Up

			case 38:
				$("img").animate({top:"-=10px"},'fast');
			break;

			//right
			case 39:
				$("img").animate({left:"+=10px"},'fast');
			break;

			case 40:
				$("img").animate({top:"+=10px"},'fast');
			break;

		}
	});

});
var app = angular.module('myApp', []);
