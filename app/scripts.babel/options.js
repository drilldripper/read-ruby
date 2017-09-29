// Saves options to chrome.storage.sync.
function save_options() {
  var level = document.getElementById('level').value;
  chrome.storage.sync.set({
    level: level,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
function restore_options() {
  chrome.storage.sync.get({
    level: '5',
  }, function(items) {
    document.getElementById('level').value = items.level;
  });
  console.log('restore');
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);