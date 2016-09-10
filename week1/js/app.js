(function() {
	'use strict';

	angular.module('LunchCheck', [])
				 .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
	function LunchCheckController ($scope) {
		var listOfItems = [];
		$scope.dishes = '';

		$scope.checkAmoutOfDishes = function () {
			if ($scope.dishes.trim() === '') {
				$scope.message = 'Please enter data first';
				$scope.class = 'red';
			} else {
				$scope.class = 'green';
				listOfItems = $scope.dishes.split(',');
				if (listOfItems.length <= 3) {
					$scope.message = 'Enjoy!';
				} else {
					$scope.message = 'Too much!';
				}
			};
		}
	}
}());
