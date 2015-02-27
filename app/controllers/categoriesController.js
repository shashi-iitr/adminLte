
(function() {
	var CategoriesController = function($scope) {
		$scope.sortBy = 'user';
		$scope.reverse = false;

		$scope.categories= [{id:'123', user:'shashi', date:'2014-07-12', status: 'approved', reason: 'lkscla'},{id:'456', user:'aseem', date:'2013-01-02', status: 'failed', reason: 'bjhcjsbcj'},{id:'789', user:'sajal', date:'2016-03-01', status: 'pending', reason: 'kjahsijkanm'},{id:'143', user:'maximus', date:'2002-01-08', status: 'corrupted', reason: 'dskjcbka,nm'},{id:'233', user:'munshi', date:'2004-03-10', status: 'chomu', reason: 'lkajsiodlksjh'}];

		$scope.doSort = function(propName) {
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};
		console.log('CategoriesController');
	};

	CategoriesController.$inject = ['$scope'];

	angular.module('adminApp')
	.controller('CategoriesController', CategoriesController);

}());
