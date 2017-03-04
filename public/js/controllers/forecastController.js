app.controller('forecastCtrl', ['$scope', '$http', '$routeParams', 'cityService', function($scope, $http, $routeParams, cityService) {

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || 5;

	$scope.weatherResult = '';

	// $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=NewYork&APPID=5446685122720eac8a747655f8b43dfb&cnt=16").then(function(res) {
	$http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.city +
		 "&APPID=5446685122720eac8a747655f8b43dfb&cnt=16").then(function(res) {
		//get data back
		var data = res.data;
		console.log(data);
		//send data to the scope forecast.html
		$scope.weatherResult = data;

		console.log($scope.weatherResult);
	}, function(err){
		console.log('there is an error');
	});
	/*$scope.weatherAPI =
		$resource("http://api.openweathermap.org/data/2.5/forecast/daily?q=NewYork&APPID=5446685122720eac8a747655f8b43dfb&cnt=16", {
			//prevent app to detect the code below as a virus,
			callback: "JSON_CALLBACK" },
			//the api said is ok to download its data from another website use JSONP
			{ get: { method: "JSONP" }
		});

		//call the data according to parameters
	$scope.weatherResults = $scope.weatherAPI.get({ q: $scope.city, cnt: 2});*/

	// console.log($scope.weatherResults);

	//convert kelvin to fahrenheit
	$scope.convertToFahrenheit = function(degK) {

		return Math.round((1.8 * (degK - 273)) + 32) + '°F';

	};

	//convert kelvn to celsius
	$scope.convertToCelsius = function(degK) {

		return Math.round(degK - 273.15) + '°C';

	};

	//convert date for readiness
	$scope.convertToDate = function(dt) {
		//new Date give you value in milliseconds, multiply by 1000 to get easy value
		return new Date(dt * 1000);
	};

}]);



