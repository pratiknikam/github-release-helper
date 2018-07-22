// Saves options to chrome.storage
function save_options() {
  chrome.storage.sync.set({'blackLists' : document.getElementById('blacklists').value}, function() {
    console.log('Settings saved');
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get('blackLists', function(items) {
    document.getElementById('blacklists').value = items.blackLists
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
