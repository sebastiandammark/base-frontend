'use strict';

(function(document, window) {
	var initialized = false;
	
    var Cookiebar = require('./modules/cookiebar');
    
    var onDOMready = function() {
        console.log('The DOM is ready');
        new Cookiebar(document.querySelector('.cookiebar'));
    }

	var init = function() {
		if (initialized) {
			return;
		}

		onDOMready();
		initialized = true;
	}

	var checkState = function() {
		var state = document.readyState;
		if (state === 'interactive' || state === 'complete' || state === 'loaded') {
			init();
		}
	}

	document.onreadystatechange = checkState;
})(document, window);