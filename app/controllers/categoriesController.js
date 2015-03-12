
(function() {
	var CategoriesController = function($scope, categoriesService) {
		$scope.sortBy = 'name';
		$scope.reverse = false;
		$scope.categories = [];

		function init() {
			$scope.categories = categoriesService.getCategories()
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


	CategoriesController.$inject = ['$scope', 'categoriesService'];

	angular.module('adminApp')
	.controller('CategoriesController', CategoriesController);

}());
