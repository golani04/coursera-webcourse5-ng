(function() {
	'use strict';

	angular.module('LunchCheck', [])
				 .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
	function LunchCheckController ($scope) {
		var listOfItems = [];
		$scope.dishes = '';

		$scope.checkAmoutOfDishes = function () {
			listOfItems = getDishes($scope.dishes);
			$scope.class = addStyles(listOfItems.length);
			if (listOfItems.length === 0) {
				$scope.message = 'Please enter data first';
			} else {
				if (listOfItems.length <= 3) {
					$scope.message = 'Enjoy!';
				} else {
					$scope.message = 'Too much!';
				}
			};
		}
	}
	function addStyles(numOfDishes) {
		if (numOfDishes === 0) {
			return 'red';
		}

		return 'green';
	}
	function getDishes (dishes) {
		var arrOfDishes = [];
		if (dishes.trim() === '') {
			return [];
		} else {
			arrOfDishes = dishes.split(',');
			arrOfDishes = arrOfDishes.filter(function (val, i) {
				return val !== '';
			});
		}
		return arrOfDishes;
	}
}());
