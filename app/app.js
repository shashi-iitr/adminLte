(function () {
	var app = angular.module('adminApp', ['ngRoute','ngAnimate', 'adminApp.services']);

	app.directive('categoryrow', function() {
		return {
			restrict: "A",
			templateUrl: 'app/views/categoryRow.html'
		};
	})
	.directive('categorytable', function() {
		return {
			restrict: "E",
			scope: {
				sort: "&",
				categories: "=info",
				categoryFilter: "=filterName",
				sortBy: "=sortBy"
			},
			templateUrl: 'app/views/categoryTable.html'
		};
	})
	.directive('categories', function() {
		return {
			restrict: "E",
			templateUrl: 'app/views/categories.html'
		};
	})
	.config(function($routeProvider) {
		console.log('routeProvider');
		$routeProvider
			.when('/', {
				controller: 'DashboardController',
				templateUrl: 'app/views/dashboard.html'
			})
			.when('/category', {
				controller: 'CategoriesController',
				templateUrl: 'app/userview/categoryList.html'
			})
			.when('/editCategory/:categoryId', {
				controller: 'EditCategoryController',
				templateUrl: 'app/views/editCategory.html'
			})	
			.otherwise( {redirectTo: '/'});
	})
	.run(function($rootScope, $http) {
		console.log(window.location.href);
		$http.get('../data/user.json').success(function (user) {
			console.log('run success');
			console.log(user);
			$rootScope.user = user;
    	});
	});
}());
