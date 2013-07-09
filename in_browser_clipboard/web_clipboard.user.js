// ==UserScript==
// @name 				The Web Clipboard
// @description 		This script will give you a clipboard on every webpage you visit
// @version 			0.1
// @namespace 			http://lgoldstien.github.io/userscripts
// @downloadURL 		https://raw.github.com/lgoldstien/userscripts/stable/in_browser_clipboard/web_clipboard.user.js
// @updateURL			https://raw.github.com/lgoldstien/userscripts/stable/in_browser_clipboard/web_clipboard.user.js
// @grant				GM_setClipboard
// ==/UserScript==

// The clipboard functions

var clipboard = {

	var clipboard = [];

	setClipboard: function (text) {
		
		GM_setClipboard(text);

	},

	getClipboard: function () {
		if (e.ctrlKey && e.keyCode === 67) {
	        alert("Text copied was: " + window.getSelection());
	    }
	},

}


$(window).keyup(function (e) {
    if (e.ctrlKey && e.keyCode === 67) {
        alert("Text copied was: " + window.getSelection());
    }
});