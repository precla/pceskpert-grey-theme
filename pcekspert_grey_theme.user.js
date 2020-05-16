// ==UserScript==
// @name         PCEkspert Grey Theme
// @version      0.5.3
// @namespace    https://github.com/precla/pceskpert-themes/pcekspert_grey_theme
// @description  slightly darker forum theme
// @author       precla / pci_e3x
// @license      GPL 3.0
// @include      http://forum.pcekspert.com/
// @include      https://forum.pcekspert.com/
// @match        http://forum.pcekspert.com/*
// @match        https://forum.pcekspert.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/precla/pceskpert-themes/master/pcekspert_grey_theme.user.js
// @downloadURL  https://raw.githubusercontent.com/precla/pceskpert-themes/master/pcekspert_grey_theme.user.js
// ==/UserScript==

for (let img of document.getElementsByTagName('img')) {
    if (img.src.includes('Forum_title.gif')) {
        img.src = 'data:image/gif;base64,R0lGODlhaABQAMIEAHR0dKKjpLOzs9LU1v///////////////yH5BAEKAAcALAAAAABoAFAAAAP+KLrc/jDKyYClOOvNaQhDCHRkaZZgOHxn675Kqq4BbN/YN6sj7v8L2Y4FLMJ0O55x2RImicyoxpkc9KTYCLI6g2a/ny13dv1Kw+NxzcxEp2nuUKDMvoWpVR2BBqfXm3FvYQSEhHMgh3+AYoJ6hYQhhVaKJHdvQ46PmoUAa5QTd3hpaJulhXOfWpaXXUimr3t+n6usKpawuJOpArS1cCm4wVaedb21t8HJe6hsh6Jqh5HKySudskbOvjSdINPebtc/3NpznQPe6ARixEDRx9Hp8SuYRe7zahbd8fuMXjcAT7ihgbevoKE84vKc+3XO4KZtFiJmWzgHoR2ACh3CsmL+btSHfHjYnejIRZ9GTfa0qYGBcVTDk5BIqhz1oqVLjXwqzrzkr4RNNS/3DeOzk+cRVibTVXtW1KILprYCCGWENJRVLuE4hJQp1ZscqK1CqerHMs84OUFNRQX7qycoJFk5/LRFMqmmr4FK3lkk0gTVpV0efrRKVawdHKLWBV16qxq9XR7ePVJxN+8KyBnmlkwryZgIzBn+5pHUdiXo0FARXRV0egPhOwJFbxvY2rVIYn8nDr1c24YQe6dkuMUcsbjx48edHJIksxry59CjS58eF4PmMM1t9S775PeQ7SyfpeQN3kX2oUKql5/SXEfL4etNcBWhPf6/VupSwLffQcx6WTn82WATWQG+IBuABZrXSIJPscbgCUgU1teDGmCk0w7qUaiFCCFpiAIi103oISgcVpHhiA2AiMeJKMYAggV5iNjiAyrGOCNqHOl1Yw4lmrijBzX6+KME+mn22ZAQRPgMiyOyxaSHBzKDZJIxdjIlkcJxc2VmUm7pYQIAOw==';
        break;
    }
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

addGlobalStyle("body, center, .page, html body div div.page div table, .alt1, .alt2, .panel, .alt1Active, .vBulletin_editor, html body div div.page div table tbody, .imagebutton { background: #B3B3B3 !important; }");
addGlobalStyle("html body div div.page div table ~ table, #threadslist, .tborder { background: #33669961 !important; }");
// text box for reply, quick reply, new messages, quick reply panel surroundings:
addGlobalStyle("textarea, .panelsurround { background: #C3C3C3 !important; }");
// highlight the current page in the open topic:
addGlobalStyle(".pagenav .alt2 { background-color: #D3D3D3 !important; text-decoration: underline }");
// qoute box
addGlobalStyle("html body div#posts div div.page div div table tbody tr td div div div table tbody tr td.alt2 { background: #C3C3C3 !important; }");
