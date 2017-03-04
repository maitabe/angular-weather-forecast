app.controller('homeCtrl', ['$scope', 'cityService',  function($scope, cityService) {

	console.log('homeCtrl');
	//link the service to controller
	$scope.city = cityService.city;

	//watch if the value of city change at any moment
	$scope.$watch('city', function() {
		cityService.city = $scope.city;

	});

}]);