(function() {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
				.controller('ToBuyShoppingController', ToBuyShoppingController)
				.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
				.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

	function ShoppingListCheckOffService () {
		var service = this;
		var itemsBought = [];
		var itemsToBuy = [
			{ name: "cookies", quantity: 10 },
			{ name: "chocolate", quantity: 3 },
			{ name: "bamba", quantity: 4 },
			{ name: "potato chips", quantity: 5 },
			{ name: "biscuit", quantity: 7 }
		];

		service.addItemToBought = function (itemIndex) {
			itemsBought.push(itemsToBuy[itemIndex]);
		};
		service.removeItemFromToBuy = function (itemIndex) {
			itemsToBuy.splice(itemIndex, 1);
		};
		service.getItemsToBuy = function () {
			return itemsToBuy;
		};
		service.getItemsToBought = function () {
			return itemsBought;
		};
	}

	// controllers
	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController (ShoppingListCheckOffService) {
		var buyList = this;

		buyList.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

		buyList.buyItems = function (itemIndex) {
			ShoppingListCheckOffService.addItemToBought(itemIndex);
			ShoppingListCheckOffService.removeItemFromToBuy(itemIndex);
		}
	}

	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController (ShoppingListCheckOffService) {
		var boughtList = this;

		boughtList.itemsBought = ShoppingListCheckOffService.getItemsToBought();
	}
}());
