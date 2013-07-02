// ==UserScript==
// @name 				High Visibility Scrollbar
// @description 		This script will make the scrollbar easily visible on any screen
// @version 			0.1
// @namespace 			http://lgoldstien.github.io/userscripts
// @downloadURL 		https://raw.github.com/lgoldstien/userscripts/stable/high_visibility_scrollbar.user.js
// @updateURL			https://raw.github.com/lgoldstien/userscripts/stable/high_visibility_scrollbar.user.js
// @grant				GM_addStyle
// ==/UserScript==

// Make the style sheet load from Github repo
var link = window.document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://raw.github.com/lgoldstien/userscripts/stable/high_visibility_scrollbar/style.css';
document.getElementsByTagName("head")[0].appendChild(link);