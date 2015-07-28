//using closures to avoid name collision and window overloading, it should be an auto node.js task
(function(){
	
	'use strict';

	angular
		.module('devvit')
		.filter('customSearch', customSearch);

	function customSearch(){
		return function (input, searchText, options) {
	        // I don´t like the "multiple var assignment approach"

	        var returnArray = [];

	        if( searchText === '' ) return returnArray;

	        // Split on single or multi space
	        var splitext = searchText.toLowerCase().split(/\s+/);
	        // Build Regexp with Logical AND using "look ahead assertions"
	        var regexp_and = '^(?=.*' + splitext.join(')(?=.*') + ')';
	        regexp_and = regexp_and.replace(/\(\?\=\.\*\-/g, '(?!.*');

	        // Build Regexp with logicial OR
	        var regexp_or = searchText
	        					.toLowerCase()
	        					.replace(/\s+/g, '|')
	        					.replace(/-\w*/, getNegativeOr );

	        function getNegativeOr(text){
	        	return '^(?!.*'+ text.substring(1) +')';
	        }
	        
	        // Compile the regular expression
	        var re = new RegExp((options.strict) ? regexp_and : regexp_or, 'gi');

	        for (var x = 0; x < input.length; x++) {
	            
	            var item = input[x];
	            var concatValues = item.Name;
	            if( options.byType ) concatValues +=' '+item.Type;
	            if( options.byCreator ) concatValues +=' '+item['Designed by'];

	            var regexResult = re.test(concatValues);
	            if ( regexResult ){
	            	item.weight = concatValues.match(re).length;
	            	console.log( concatValues, searchText, item.weight);
	            	returnArray.push(item);	
	            } 
	        }

	        // View what the 2 regular expression look like
	        console.log(regexp_or);
	        console.log(regexp_and);
	        return returnArray;
	    }
	}

})();