(function () {
	var app = angular.module('adminApp', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'DashboardController',
				templateUrl: 'app/views/dashboard.html'
			})
			.when('/category', {
				controller: 'CategoriesController',
				templateUrl: 'app/views/categories.html'
			})
			.when('/editCategory/:categoryId', {
				controller: 'EditCategoryController',
				templateUrl: 'app/views/editCategory.html'
			})	
			.otherwise( {redirectTo: '/'});
	});
}());
