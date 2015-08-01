(function () {'use strict';

angular.module('paddyPowerApp', ['ApiModule'
	])

.controller('AppController',['$scope','ApiService',
	function($scope, apiService){
		apiService.getData().then(function(response){ $scope.competitions = response.data.competitions;});
		$scope.toggleCompetitionData = function(competitionData) {
			console.log(competitionData.events.length);
			$scope.competitionName = competitionData.name;
			if (competitionData.events.length == 0) {
				$scope.events = [{name: "NO EVENTS IN THIS LEAGUE"}] //TODO: (yslavov) add strings module instead of hardcoded strings
			} else {
				$scope.events = competitionData.events;
			}
			
		};
	}])

})();


