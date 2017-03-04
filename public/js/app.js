var app = angular.module('weatherForcast', ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		templateUrl: '/templates/home.html',
		controller: 'homeCtrl'
	})
	.when('/forecast', {
		templateUrl: '/templates/forecast.html',
		controller: 'forecastCtrl'
	})
	.when('/forecast/:days', {
		templateUrl: '/templates/forecast.html',
		controller: 'forecastCtrl'
	});

	$locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
});