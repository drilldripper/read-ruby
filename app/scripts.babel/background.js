'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(null, {file:'scripts/css/ruby.css'}, null);
  chrome.tabs.sendMessage(tab.id, 'goRuby', status =>{
    console.log('status', status);
      if(status['display']){
        chrome.tabs.insertCSS(null, {file:'scripts/css/display_none.css'}, null); 
      }else{
        chrome.tabs.insertCSS(null, {file:'scripts/css/display_block.css'}, null); 
    }
  });
});