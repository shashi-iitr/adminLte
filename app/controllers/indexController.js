(function(){
	var IndexController = function($scope) {
		$scope.indexes = [{"name":"Dashboard", "className":"fa fa-dashboard", "link":"#/"},
							{"name":"Categories", "className":"fa fa-th", "link":"#/category"},
							{"name":"Products", "className":"fa fa-wrench", "link":"#/category"},
							{"name":"Orders", "className":"fa fa-pencil-square-o", "link":"#/category"},
							{"name":"Users", "className":"fa fa-users", "link":"#/category"}];

		$scope.currentIndex = $scope.currentIndex ? $scope.currentIndex : $scope.indexes[0];

		$scope.setCurrentIndex = function(index) {
			$scope.currentIndex = index;
		};

		$scope.isCurrentIndex = function(index) {
			return $scope.currentIndex !==null && $scope.currentIndex.name === index.name;
		};

	};


	IndexController.$inject = ['$scope'];

	angular.module('adminApp')
		.controller('IndexController', IndexController);

}());