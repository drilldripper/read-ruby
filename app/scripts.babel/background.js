'use strict';

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(null, {file:'scripts/css/ruby.css'}, null);
  chrome.tabs.sendMessage(tab.id, 'goRuby', status =>{
    // console.log('status', status);
      if(status['display']){
        chrome.tabs.insertCSS(null, {file:'scripts/css/display_none.css'}, null);
        chrome.browserAction.setIcon({path:'images/icon-38.png', tabId: tab.id});  
        
      }else{
        chrome.tabs.insertCSS(null, {file:'scripts/css/display_block.css'}, null);
        chrome.browserAction.setIcon({path:'images/icon-38_display.png', tabId: tab.id});  
    }
  });
});