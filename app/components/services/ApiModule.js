(function () { 'use strict';

	angular.module('ApiModule', [])

	.factory('ApiService', ['$http',
		function($http){
			var _httpClient = $http;
			var getData = function(){  
				var promise =  _httpClient.get('components/data/data.json');
				return promise;
			}
			return {
				getData : getData
			};
		}])
	; // end of module
})();
