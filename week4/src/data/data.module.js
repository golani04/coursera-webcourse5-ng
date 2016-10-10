(function() {
	'use strict';

	angular.module('data', [])	
	.constant('ApiCategories', 'https://davids-restaurant.herokuapp.com/categories.json')
	.constant('ApiCategoryName', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');
}());
