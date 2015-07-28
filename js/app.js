//using closures to avoid name collision and window overloading, it should be an auto node.js task
(function(){
	
	'use strict';

	angular
		.module('devvit', [])
		.constant('URL', {
			AWESOME_ENDPOINT: 'data/data.json'
		})

})();