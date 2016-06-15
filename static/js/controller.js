var krisAppControllers = angular.module('krisAppControllers', []);

krisAppControllers.controller('cycleCtrl',['$scope','$http',
	function($scope,$http){
		$http.get('template/data/describe.json').success(function(data){
			$scope.describe=data;
		});
	}]);

krisAppControllers.controller('cardsCtrl',['$scope','$http',
	function($scope,$http){
		$http.get('template/data/cards.json').success(function(data){
			$scope.cards1=data;
		});
	}]);

krisAppControllers.controller('nextCardsCtrl',['$scope','$http',
	function($scope,$http){
		$http.get('template/data/cards_row.json').success(function(data){
			$scope.cards2=data;
		});
	}]);