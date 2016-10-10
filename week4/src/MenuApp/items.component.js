(function() {
	'use strict';

	angular.module('MenuApp')
	.component('categoryItems', {
		templateUrl: 'src/MenuApp/templates/category-itemlist.template.html',
		bindings: {
			items: '<'
		}
	});


}());
