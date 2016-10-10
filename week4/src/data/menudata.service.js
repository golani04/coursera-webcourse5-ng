(function() {
	'use strict';

	angular.module('data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['ApiCategories', 'ApiCategoryName', '$http']
	function MenuDataService (ApiCategories, ApiCategoryName, $http) {
		var menuData = this;
		
		menuData.getAllCategories = function () {
			return $http.get(ApiCategories);
		};
		menuData.getItemsForCategory = function (categoryName) {
			return $http.get(ApiCategoryName + '' + categoryName);
		};
	}
}());
