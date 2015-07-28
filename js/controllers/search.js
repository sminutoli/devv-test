//using closures to avoid name collision and window overloading, it should be an auto node.js task
(function(){
	
	'use strict';

	angular
		.module('devvit')
		.controller('SearchCtrl', SearchCtrl);

	//avoid anonymous function to improve readability
	function SearchCtrl(MyDataProvider){

		var me = this; // reference to this in order to keep context
		me.collection = MyDataProvider.getAll();
		me.theSearch = '';
		me.strictSearch = false;

	}

})();