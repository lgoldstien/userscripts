// ==UserScript==
// @name 				High Visibility Scrollbar
// @description 		This script will make the scrollbar easily visible on any screen
// @version 			0.1
// @namespace 			http://lgoldstien.github.io/userscripts
// @downloadURL 		https://raw.github.com/lgoldstien/userscripts/stable/high_visibility_scrollbar.user.js
// @updateURL			https://raw.github.com/lgoldstien/userscripts/stable/high_visibility_scrollbar.user.js
// @grant				GM_addStyle
// ==/UserScript==

// The script object

var hvs = {
	// Add a stylesheet
	addStyle: function(stylesheeturl) {
		var stylesheet = window.document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = stylesheeturl;
		document.getElementsByTagName("head")[0].appendChild(stylesheet);
	},
	// Add a script
	addScript: function(scripturl) {
		var script = window.document.createElement('script');
		link.src = scripturl;
		document.getElementsByTagName("body")[0].appendChild(script);
	},
	// Wrap the contents of the body
	wrapContent: function(classname) {
		$('body').wrapInner('<div class="' + classname + '" />');
	}
}

// Run when we have everything set and loaded
window.onload = function() {
	// Add jquery if not already there
	if (typeof $ == 'undefined') {  
	    hvs.addScript("https://github.com/lgoldstien/userscripts/blob/stable/high_visibility_scrollbar/jquery.js");
	}
	// Add the custom scrollbar script
	hvs.addScript("https://github.com/lgoldstien/userscripts/blob/stable/high_visibility_scrollbar/jquery.custom-scrollbar.js");
	// Add the css files
	hvs.addStyle("https://github.com/lgoldstien/userscripts/blob/stable/high_visibility_scrollbar/jquery.custom-scrollbar.css");
	hvs.addStyle("https://github.com/lgoldstien/userscripts/blob/stable/high_visibility_scrollbar/style.css");

	// Wrap the body
	hvs.wrapContent("_hvs_body");

	// Run the required bits
	$("._hvs_body").customScrollbar();
});
