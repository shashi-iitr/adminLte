(function() {
	var LoginController = function ($scope) {
		$scope.name = null;
		$scope.password = null;

		$scope.signInUser = function() {

		};
	};

	LoginController.$inject = ['$scope'];

	app.module('adminApp')
		.controller('LoginController', LoginController);

}());