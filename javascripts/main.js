'use strict';
var app = angular.module('app', [ 'input-usphone' ]);

app.controller('MainCtrl', function ($scope) {
	$scope.number = 5558675309;
});
