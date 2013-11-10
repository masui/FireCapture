//
// タブ操作をするたびにスクリーンダンプをとるFirefox拡張
//
var tabs = require("sdk/tabs");
var request = require("sdk/request").Request;

tabs.on('activate', function(tab) {
    var req = request({
	url: "http://localhost/~masui/screendump.cgi",
	onComplete: function (response) {
	    // console.log("screendump done");
	}
    });
    req.get();
    // console.log("tab activate");
});
