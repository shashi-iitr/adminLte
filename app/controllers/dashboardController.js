(function() {

	var DashboardController = function($scope) {

		function init() {
			

			console.log('dashboard controller '+ $scope.user.name);
		}

		init();
		
	};

	DashboardController.$inject = ['$scope'];
    
    angular.module('adminApp')
	.controller('DashboardController', DashboardController);
    
}());