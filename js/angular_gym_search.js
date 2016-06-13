var app=angular.module('app', ['react']);

app.controller('gymController', ['$scope','$http', function($scope,$http){
	$http.get('data/gyms-original.json').success(function(data){
		$scope.gyms_data_from_the_server=data;
	});
}]);