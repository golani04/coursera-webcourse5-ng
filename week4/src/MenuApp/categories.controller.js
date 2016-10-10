(function() {
	'use strict';

	angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['categories'];
	function CategoriesController (categories) {
		var catList = this;
		catList.categories = categories;
		catList.shortName = '';

		catList.getName = function (name) {
			catList.shortName = name;
		}
	};
}());
