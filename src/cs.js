(() => {
	'use strict';
	var cs = chrome.runtime.sendMessage({
		action: 'contentScript',
		host: location.host,
		protocol: location.protocol
	});
})();