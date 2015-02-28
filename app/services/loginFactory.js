(function() {
	var loginFactory = function ($http) {
		var factory = {};
		factory.login = function () {

		};

		return factory;
	};

	loginFactory.$inject = ['$http'];

	angular.module('adminApp')
		.factory('loginFactory', loginFactory);
	
}());