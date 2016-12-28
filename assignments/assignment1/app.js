(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

	$scope.checkIfTooMuch = function(){
		var mystring = $scope.name; // get the input value
		if(mystring != null){
			var elements = mystring.split(',');
			var num = 0;
	        var i; //item counter
	        for (i in elements) { // empty string doesn't count
	          if(!(elements[i].length == 0 || !elements[i].trim())){
	            num += 1;
	          }
	        }
			if(num > 3){ // check if count is morethan 3
				$scope.message = "Too much!"; 
				$scope.border_color = "border-red";
				$scope.font_color = "red";
			}
			else{
				$scope.message = "Enjoy!";
				$scope.border_color = "border-green";
				$scope.font_color = "green";
			}
		}
		else{
			$scope.message = "Please enter data first";
			$scope.border_color = "border-red";
			$scope.font_color = "red";
		}
  	}
}

})();