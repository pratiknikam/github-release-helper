// Saves options to chrome.storage
function save_options() {
  var blackLists = document.getElementById('blacklists').value;
  var jiraBaseURL = document.getElementById('jirabaseurl').value;
  chrome.storage.sync.set({'blackLists' : blackLists, 'jiraBaseURL' : jiraBaseURL}, function() {
    console.log('Settings saved');
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get(function(obj) {
    document.getElementById('blacklists').value = obj.blackLists || '';
    document.getElementById('jirabaseurl').value = obj.jiraBaseURL || '';
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
