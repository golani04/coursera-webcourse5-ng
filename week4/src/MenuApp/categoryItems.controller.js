(function() {
	'use strict';

	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

	ItemsController.$inject = ['categoryItems'];
	function ItemsController ( categoryItems) {
		var itemsList = this;
		itemsList.categoryItems = categoryItems.menu_items;
	};
}());
