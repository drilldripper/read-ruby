(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Saves options to chrome.storage.sync.
function save_options() {
  var level = document.getElementById('level').value;
  chrome.storage.sync.set({
    level: level
  }, function () {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
function restore_options() {
  chrome.storage.sync.get({
    level: '5'
  }, function (items) {
    document.getElementById('level').value = items.level;
  });
  console.log('restore');
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy5iYWJlbC9vcHRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLFNBQVMsWUFBVCxHQUF3QjtBQUN0QixNQUFJLFFBQVEsU0FBUyxjQUFULENBQXdCLE9BQXhCLEVBQWlDLEtBQTdDO0FBQ0EsU0FBTyxPQUFQLENBQWUsSUFBZixDQUFvQixHQUFwQixDQUF3QjtBQUN0QixXQUFPO0FBRGUsR0FBeEIsRUFFRyxZQUFXO0FBQ1o7QUFDQSxRQUFJLFNBQVMsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQSxXQUFPLFdBQVAsR0FBcUIsZ0JBQXJCO0FBQ0EsZUFBVyxZQUFXO0FBQ3BCLGFBQU8sV0FBUCxHQUFxQixFQUFyQjtBQUNELEtBRkQsRUFFRyxHQUZIO0FBR0QsR0FURDtBQVVEOztBQUVEO0FBQ0EsU0FBUyxlQUFULEdBQTJCO0FBQ3pCLFNBQU8sT0FBUCxDQUFlLElBQWYsQ0FBb0IsR0FBcEIsQ0FBd0I7QUFDdEIsV0FBTztBQURlLEdBQXhCLEVBRUcsVUFBUyxLQUFULEVBQWdCO0FBQ2pCLGFBQVMsY0FBVCxDQUF3QixPQUF4QixFQUFpQyxLQUFqQyxHQUF5QyxNQUFNLEtBQS9DO0FBQ0QsR0FKRDtBQUtBLFVBQVEsR0FBUixDQUFZLFNBQVo7QUFDRDtBQUNELFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLGVBQTlDO0FBQ0EsU0FBUyxjQUFULENBQXdCLE1BQXhCLEVBQWdDLGdCQUFoQyxDQUFpRCxPQUFqRCxFQUNJLFlBREoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gU2F2ZXMgb3B0aW9ucyB0byBjaHJvbWUuc3RvcmFnZS5zeW5jLlxuZnVuY3Rpb24gc2F2ZV9vcHRpb25zKCkge1xuICB2YXIgbGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwnKS52YWx1ZTtcbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe1xuICAgIGxldmVsOiBsZXZlbCxcbiAgfSwgZnVuY3Rpb24oKSB7XG4gICAgLy8gVXBkYXRlIHN0YXR1cyB0byBsZXQgdXNlciBrbm93IG9wdGlvbnMgd2VyZSBzYXZlZC5cbiAgICB2YXIgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpO1xuICAgIHN0YXR1cy50ZXh0Q29udGVudCA9ICdPcHRpb25zIHNhdmVkLic7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0sIDc1MCk7XG4gIH0pO1xufVxuXG4vLyBSZXN0b3JlcyBzZWxlY3QgYm94IGFuZCBjaGVja2JveCBzdGF0ZSB1c2luZyB0aGUgcHJlZmVyZW5jZXNcbmZ1bmN0aW9uIHJlc3RvcmVfb3B0aW9ucygpIHtcbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoe1xuICAgIGxldmVsOiAnNScsXG4gIH0sIGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsJykudmFsdWUgPSBpdGVtcy5sZXZlbDtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKCdyZXN0b3JlJyk7XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcmVzdG9yZV9vcHRpb25zKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgIHNhdmVfb3B0aW9ucyk7Il19
