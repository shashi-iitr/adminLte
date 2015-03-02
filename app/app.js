(function () {
	var app = angular.module('adminApp', ['ngRoute', 'ngAnimate']);


	app.config(function($routeProvider) {
		console.log('routeProvider');
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
	})
	.run(function($rootScope, $http) {
		console.log('run');
		$http.get('../data/user.json').success(function (user) {
			console.log('run success');
			console.log(user);
			$rootScope.user = user;
    	});
	});
}());
