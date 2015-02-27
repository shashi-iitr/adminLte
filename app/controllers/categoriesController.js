
(function() {
	var CategoriesController = function($scope, categoriesFactory) {
		$scope.sortBy = 'user';
		$scope.reverse = false;
		$scope.categories = [];

		function init() {
			$scope.categories = categoriesFactory.getCategories();
		}	

		init();

		$scope.doSort = function(propName) {
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};
		console.log('CategoriesController');
	};

	CategoriesController.$inject = ['$scope', 'categoriesFactory'];

	angular.module('adminApp')
	.controller('CategoriesController', CategoriesController);

}());
