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
			.otherwise( {redirectTo: '/'});
	});
}());
