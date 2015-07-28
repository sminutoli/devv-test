//using closures to avoid name collision and window overloading, it should be an auto node.js task
(function(){
	
	'use strict';

	angular
		.module('devvit')
		.service('MyDataProvider', MyDataProvider);

	function MyDataProvider($http, URL){
		var me = this; // reference to this in order to keep context
		var all = [];

		/* exposed methods */
		me.getAll = getAll;

		/* implementation */
		function getAll(){
			$http
				.get(URL.AWESOME_ENDPOINT)
				.success( fillArray )

			function fillArray(result){
				// we´re returing the array reference, so something like...
				// all = result; 
				// ... breaks the reference!
				angular.copy( result, all );
			}

			return all;
		}
	}

})();