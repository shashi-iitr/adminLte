
(function() {
	var CategoriesController = function($scope, categoriesFactory) {
		$scope.sortBy = 'name';
		$scope.reverse = false;
		$scope.categories = [];

		function init() {
			$scope.categories = categoriesFactory.getCategories()
		// 		.success(function(categories) {
		// 			$scope.categories = categories;
		// 		})
		// 		.error(function(data, status, headers, config) {
		// 			console.log('error');
		// 		});
		// }
		}	

		init();

		$scope.doSort = function(propName) {
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};
	};

	CategoriesController.$inject = ['$scope', 'categoriesFactory'];

	angular.module('adminApp')
	.controller('CategoriesController', CategoriesController);

}());
