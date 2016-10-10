(function() {
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig ($stateProvider, $urlRouterProvider) {

		// Default page
		$urlRouterProvider.otherwise('/');

		$stateProvider
		// home
		.state('home', {
			url: '/',
			templateUrl: 'src/MenuApp/templates/home.template.html'
		})
		.state('home.special', {
			url: 'special',
			template: '<div class="text-center"><h2>Under Construction</h2></div>'
		})
		.state('home.categories', {
			url: 'categories',
			templateUrl: 'src/MenuApp/templates/categories.template.html',
			controller: 'CategoriesController',
			controllerAs: 'catCtrl',
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories()
									.then(function (data) {
										return data.data;
									});
				}]
			}
		})
		.state('home.categories.items', {
			url: '/items/{categoryName}',
			template: '<category-items items="itemCtrl.categoryItems"></category-items>',
			controller: 'ItemsController',
			controllerAs: 'itemCtrl',
			resolve: {
				categoryItems: ['MenuDataService', '$stateParams',
				 function (MenuDataService, $stateParams) {
					return MenuDataService.getItemsForCategory($stateParams.categoryName)
									.then(function (data) {
										return data.data;
									});
				}]
			}
		})
	};
}());
