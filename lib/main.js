//
// タブ操作をするたびにスクリーンダンプをとるFirefox拡張
//
var tabs = require("sdk/tabs");
var request = require("sdk/request").Request;

var date = new Date();
var url = "";

function capture(tab){
    var req = request({
	url: "http://localhost/~masui/screendump.cgi",
	onComplete: function (response) {
	    // console.log("screendump done");
	}
    });
    var newdate = new Date();
    if(newdate - date > 1000 && tab.url != url){
	req.get();
	date = newdate;
	url = tab.url;
    }
}

tabs.on('activate', function(tab) {
    capture(tab);
});

tabs.on('open', function onOpen(tab) {
    // capture(tab);
});

tabs.on('ready', function(tab) {
    capture(tab);
});