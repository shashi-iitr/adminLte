(function () {
	var categoryFactory = function($http) {

		categories = [{"id":"123", "name":"hp", "link":"http://www.ideal.es/ideal/granada/multimedia/201402/07/media/sc.jpg"},
{"id":"473", "name":"mac", "link":"http://cdn.superbwallpapers.com/wallpapers/celebrities/scarlett-johansson-17445-1920x1200.jpg"},
{"id":"189", "name":"moto g", "link":"http://www.tahrirnews.com/uploads/images/189300.jpeg"},
{"id":"462", "name":"pulsar", "link":"https://dtsft.files.wordpress.com/2012/11/scarlett-johansson1.jpg"},
{"id":"946", "name":"tvs", "link":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSvrnWKb-RwIrriFLj39GupU1hTfqiv1sRDsQdnTa7yXmN6nR"}];

		var factory = {};
		factory.getCategories = function () {
			console.log('categories Json Called');
			return categories;
			// return $http.get('data/categories.json');
		};

		return factory;
	};

	categoryFactory.$inject = ['$http'];

	angular.module('adminApp')
		.factory('categoriesFactory', categoryFactory);
}());