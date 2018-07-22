chrome.browserAction.onClicked.addListener(function (tab) {
  console.log("clicked");
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.id, {
		file: 'src/inject/inject.js'
	});
});

// <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
