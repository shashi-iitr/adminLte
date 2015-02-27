
(function() {
	var CategoriesController = function($scope, categoriesService) {
		$scope.sortBy = 'user';
		$scope.reverse = false;
		$scope.categories = [];

		function init() {
			$scope.categories = categoriesService.getCategories();
		}	

		init();

		$scope.doSort = function(propName) {
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};
		console.log('CategoriesController');
	};

	CategoriesController.$inject = ['$scope', 'categoriesService'];

	angular.module('adminApp')
	.controller('CategoriesController', CategoriesController);

}());
