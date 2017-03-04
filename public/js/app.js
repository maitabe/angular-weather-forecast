var app = angular.module('weatherForcast', ['ui.router']);
//.config always runs before our controllers

//ngRoute
/*app.config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		templateUrl: '/templates/home.html',
		controller: 'homeCtrl'
	})
	.when('/forecast', {
		templateUrl: '/templates/forecast.html',
		controller: 'forecastCtrl'
	})
	// .when('/forecast/:days', {
	// 	templateUrl: '/templates/forecast.html',
	// 	controller: 'forecastCtrl'
	// });

	$locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
});*/

//ui.router
//$urlRouterProvider is responsible for watching $location
//$stateProvider keep track of the application state
app.config(function($stateProvider, $urlRouterProvider) {
	//re-route to home if some page doesn't exist
console.log($stateProvider);
	$stateProvider.state('home', {
		url:'/home',
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	})
	.state('forecast', {
		url:'/forecast',
		templateUrl: 'templates/forecast.html',
		controller: 'forecastCtrl'
	});

	$urlRouterProvider.otherwise('/home');

});