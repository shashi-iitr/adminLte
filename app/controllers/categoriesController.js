
(function() {
	var CategoriesController = function($scope, categoriesFactory) {
		$scope.sortBy = 'user';
		$scope.reverse = false;
		$scope.categories = [];

		function init() {
			categoriesFactory.getCategories()
				.success(function(categories) {
					console.log('success called');
					$scope.categories = categories;
				})
				.error(function(data, status, headers, config) {
					console.log('error');
					$log.log(data.error);
				});
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
