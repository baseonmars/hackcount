/*
var pollCounter = function () {
  $.get('https://cors-anywhere.herokuapp.com/http://www.moonfruit.com/sitecount.json', function onDataReturned(data) { 
    counter.setValue(data.count.replace(/,/g,""));
    console.log("hello", data.count);
    setTimeout(getCount, 1000);
  });
};

pollCount();

*/















var url = 'https://cors-anywhere.herokuapp.com/http://www.moonfruit.com/sitecount.json';

var onDataReturned = function(data) {
	counter.setValue(data.count.replace(/,/g, ''));
	setTimeout(pollCounter, 5000);
}

var pollCounter = function () {
	$.get(url, onDataReturned);
}

pollCounter();







