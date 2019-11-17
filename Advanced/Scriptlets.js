// https://raw.githubusercontent.com/uBlock-user/uBO-Scriptlets/master/scriptlets.txt
// https://raw.githubusercontent.com/NanoAdblocker/NanoCore2/master/src/snippets.js
// https://raw.githubusercontent.com/gorhill/uBlock/9367a6015b8cbb6b49347b00a105aab8f24df861/assets/resources/scriptlets.js
// https://github.com/bogachenko/presstheattack/blob/personal/scriptlets.txt

// These are things I've found that I believe to be useful
// Mainly for my personal use but feel free to use it

// https://github.com/gorhill/uBlock/issues/1228
/// window.name-defuser.js
/// alias wnd.js
(function() {
    if ( window === window.top ) {
        window.name = '';
    }
})();

// element-clicker-onload
/// eclick.js
/// alias ec.js
(() => {
    'use strict';
    let selector = '{{1}}';
    if (selector === '' || selector === '{{1}}') {
        return;
    }, 5000);
}
    let click = () => {
        let element = document.querySelector(selector);
        element.click();
    };
    if (document.readyState === 'complete') {
        click();
    } else {
        addEventListener('DOMContentLoaded', click);
    }
})();
