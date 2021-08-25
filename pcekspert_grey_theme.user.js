// ==UserScript==
// @name         PCEkspert Grey Theme
// @version      0.7.6
// @namespace    https://github.com/precla/pceskpert-themes/
// @description  slightly darker forum theme
// @author       precla / pci_e3x
// @license      GPL 3.0
// @run-at       document-start
// @include      http://forum.pcekspert.com/
// @include      https://forum.pcekspert.com/
// @match        http://forum.pcekspert.com/*
// @match        https://forum.pcekspert.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/precla/pceskpert-themes/master/pcekspert_grey_theme.user.js
// @downloadURL  https://raw.githubusercontent.com/precla/pceskpert-themes/master/pcekspert_grey_theme.user.js
// ==/UserScript==

document.addEventListener("DOMContentLoaded", DOM_ContentReady);

function DOM_ContentReady () {
    // header + footer
    addGlobalStyle(".header, .pce-footer { background-image: linear-gradient(to bottom, #afafaf 0%, #7d7d7d 100%); }");
    // megaphone image
    for (let img of document.getElementsByTagName('img')) {
        if (img.src.includes('Forum_title.gif')) {
            img.src = 'data:image/png;base64,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';
            break;
        }
    }
    runStyles();
}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function runStyles() {
    // max width
    addGlobalStyle("html { max-width: 1440px !important; margin: 0 auto !important; } #posts div#__xclaimwords_wrapper img { max-width: 100% !important } ");
    // page background
    addGlobalStyle("body, center, .page, html body div div.page div table, .alt1, .alt2, .panel, .alt1Active, .vBulletin_editor, html body div div.page div table tbody, .imagebutton { background: #7d7d7d !important; }");
    // borders inside & outside tables
    addGlobalStyle("html body div div.page div table ~ table, #threadslist, .tborder { background: #9d9d9d !important; }");
    // text box for reply, quick reply, new messages, quick reply panel surroundings:
    addGlobalStyle("textarea, .panelsurround, .bginput { background: #C3C3C3 !important; }");
    // highlight the current page in the open topic:
    addGlobalStyle(".pagenav .alt2 { background-color: #D3D3D3 !important; text-decoration: underline }");
    // qoute box
    addGlobalStyle("html body div#posts div div.page div div table tbody tr td div div div table tbody tr td.alt2 { background: #9e9e9e !important; }");
    // fonts & text
    addGlobalStyle("font, .pagetitle, page, td, TD, tr, h1, h2, h3, p, top_menu a, a, a *, a:visited, table, tbody, .alt1, .smallfont, .time, label, legend, .bginput, #vBulletin_editor, pre, #vB_Editor_QR, textarea, #vB_Editor_001_textarea, .alt2, #collapseobj_newpost_options tr td.panelsurround div.panel div fieldset.fieldset div div, .panelsurround div.panel div div { color: #181818 !important; text-shadow: 0px 0px !important; }");
    // amout of unread pm in red color
    addGlobalStyle("blink strong { color: #ff0000 !important; }");
}

runStyles();
