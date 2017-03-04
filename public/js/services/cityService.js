app.factory('cityService', function() {
	console.log('cityService');
	//share data between controllers
	//this is just an example for the sake of studying
	var weatherService = {
		city: 'New York, NY'
	};

	return  weatherService;

});