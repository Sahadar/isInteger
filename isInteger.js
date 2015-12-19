(function() {
	'use strict';

	var isInteger = Number.isInteger || function (x) {
		return isFinite(x) && Math.floor(x) === x;
	};

	//if sbd's using requirejs library to load deferred.js
	if(typeof define === 'function') {
		define(isInteger);
	}

	//node.js
	if(typeof module === 'object' && module.exports) {
		module.exports = isInteger;
	}

	if(typeof window === 'object') {
		window.isInteger = isInteger;

		if(window !== scope) {
			scope.isInteger = isInteger;
		}
	}
})();