(function () {
	var categoryFactory = function($http) {

		var factory = {};
		factory.getCategories = function () {
			console.log('categories Json Called');
			return $http.get('data/categories.json');
		};

		return factory;
	};

	categoryFactory.$inject = ['$http'];

	angular.module('adminApp')
		.factory('categoriesFactory', categoryFactory);
}());