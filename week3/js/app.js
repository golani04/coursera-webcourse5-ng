(function() {
	'use strict';
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective)
	.constant('ApiMenuItems', 'https://davids-restaurant.herokuapp.com/menu_items.json');

	// Controller
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController (MenuSearchService) {
		var vm = this;
		vm.found = null;

		vm.findMatchItems = function (searchTerm) {
			if (searchTerm !== undefined && searchTerm !== '') {
				MenuSearchService.getMatchedMenuItems(searchTerm);
				vm.found = MenuSearchService.foundItems;
				vm.serchTerm = '';
			} else {
				vm.found = [];
			}
		}

		vm.removeFoundItem = function (index) {
			MenuSearchService.removeFoundItem(index);
		}
	}

	// Service
	MenuSearchService.$inject = ['$http', 'ApiMenuItems'];
	function MenuSearchService ($http, ApiMenuItems) {
		var service = this;
		service.foundItems = [];

		service.getMatchedMenuItems = function (searchTerm) {
			return $http
						.get(ApiMenuItems)
						.then(function (result) {
							var foundItems = [];
							angular.forEach(result.data.menu_items, function (val, idx) {
								if (val.description.indexOf(searchTerm) > -1) {
									foundItems.push(val);
								}
							});
							angular.copy(foundItems, service.foundItems);
							// return foundItems;
						})
						.catch(function (error) {
							console.log(error.status, error.statusText);
						});
		}

		service.removeFoundItem = function (index) {
			if (service.foundItems.length > 0) {
				service.foundItems.splice(index, 1);
			}
		}

	}

	// directive FoundItems
	function FoundItemsDirective () {
		var ddo = {
			templateUrl: 'templates/founditems.template.html',
			restrict: 'E',
			scope: {
				foundItems: '<',
				onRemove: '&'
			},
			controller: FoundItemsDirectiveController,
			controllerAs: 'foundDirectiveCtrl',
			bindToController: true
		}

		return ddo;
	}

	//  Directive's controlller
	function FoundItemsDirectiveController () {
		var foundList = this;
	}
}());
