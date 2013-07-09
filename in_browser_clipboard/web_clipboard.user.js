// ==UserScript==
// @name                The Web Clipboard
// @description         This script will give you a clipboard on every webpage you visit
// @version             0.1
// @namespace           http://lgoldstien.github.io/userscripts
// @downloadURL         https://raw.github.com/lgoldstien/userscripts/stable/in_browser_clipboard/web_clipboard.user.js
// @updateURL           https://raw.github.com/lgoldstien/userscripts/stable/in_browser_clipboard/web_clipboard.user.js
// @require             http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @grant               GM_setClipboard
// ==/UserScript==

$(document).ready(function(){
    $(window).keydown(function (e) {
        clipboard.getClipboard(e);
    });
});


// The clipboard functions
var clipboard = {

    setClipboard: function (text) {
        
        GM_setClipboard(text);

    },

    getClipboard: function (e) {
        if (e.ctrlKey && e.keyCode === 67) {
            var content = window.getSelection();
            this.storeItem(content);
        }
    },

    storeItem: function (content) {
        var row = this.storageCurrentRows();
        row = row + 1;
        localStorage.setItem("web_clipboard_" + row, content);
        localStorage.setItem("web_clipboard_rows", row);
        console.log("Copied an item to storage row " + row + " with following content: " + content)
    },

    storageCountRows: function () {
        return localStorage.getItem("web_clipboard_rows");
    },

    storageCurrentRows: function () {
        return this.storageCountRows() + 1;
    }

}
