var App = angular.module('App', []);

App.controller("Controle", ['$scope', function($scope){
	$scope.name = "Rafael Augusto";
	$scope.habilitaNome = function(newName){
		$scope.name = newName;
	}
}]);

App.controller("Controle2", ['$scope', function($scope){
	$scope.name = "Augusto";
}]);