(function() {
	var dashboardFactory = function ($http) {
		user = {"name":"shashi"};

		var factory = {};

		factory.getUserInformation = function () {
			return user;
		};

		return factory;
	};

	dashboardFactory.$inject = ['$http'];

	angular.module('adminApp')
		.factory('dashboardFactory', dashboardFactory);
	
}());