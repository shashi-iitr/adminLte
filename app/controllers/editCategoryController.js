
(function() {
	var EditCategoryController = function($scope, $routeParams, categoriesFactory) {
		var categoryId = $routeParams.categoryId;
		var categoryIndex = null;
		$scope.categories = [];
		$scope.category = {};

		function init() {
			$scope.categories = categoriesFactory.getCategories()
			for (var i = 0; i < categories.length; i++) {
						if (categories[i].id === categoryId) {
							categoryIndex = i;
							$scope.category = categories[i];
							break;
						};
					};

				// .success(function(categories) {
				// 	$scope.categories = categories;
				// 	for (var i = 0; i < categories.length; i++) {
				// 		if (categories[i].id === categoryId) {
				// 			categoryIndex = i;
				// 			$scope.category = categories[i];
				// 			break;
				// 		};
				// 	};
				// 	console.log($scope.category);
				// })
				// .error(function(data, status, headers, config) {
				// 	console.log('error');
				// 	$log.log(data.error);
				// });
		}	

		init();

		

	};


	EditCategoryController.$inject = ['$scope', '$routeParams', 'categoriesFactory'];

	angular.module('adminApp')
	.controller('EditCategoryController', EditCategoryController);

}());
