'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

let toggleShow = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log(tab.id);
  chrome.tabs.insertCSS(null, {file:'css/ruby.css'}, null);
  chrome.tabs.sendMessage(tab.id, 'goRuby', status =>{
    console.log('status', status);
    
    if(status){
      if(toggleShow){
        chrome.tabs.insertCSS(null, {file:'css/display_none.css'}, null); 
        toggleShow = !toggleShow;
        console.log('toggle', toggleShow);
      }else{
        chrome.tabs.insertCSS(null, {file:'css/display_inline.css'}, null); 
        toggleShow = !toggleShow;
        console.log('toggle', toggleShow);
      }
    }
  });
});

