(function() {
	'use strict';

	angular.module('MenuApp')
	.component('categoriesList', {
		templateUrl: 'src/MenuApp/templates/categories-list.template.html',
		bindings: {
			categories: '<',
			shortName: '@name',
			getName: '&'
		}
	});


}());
