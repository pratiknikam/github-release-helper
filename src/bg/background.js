chrome.runtime.onInstalled.addListener(function(details){
  if(details.reason == "install"){
    console.log("This is a first install!");
    const defaultBlackList = '^merge, tests, lint';
    chrome.storage.sync.set({'blackLists' : defaultBlackList});
  } else if(details.reason == "update"){
    var thisVersion = chrome.runtime.getManifest().version;
    console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
  }
});

chrome.browserAction.onClicked.addListener(function (tab) {
  console.log("clicked");
  // for the current tab, inject the "inject.js" file & execute it
  chrome.tabs.executeScript(tab.id, {
    file: 'src/inject/inject.js'
  });
});

// Icons made by https://www.flaticon.com/authors/smashicons is licensed by http://creativecommons.org/licenses/by/3.0/
