// ==UserScript==
// @name         UwU Bypass
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bypass Banana
// @author       UwU
// @match        *://ads.luarmor.net/get_key?for=VHFslhWdrPey
// @match        *://linkvertise.com/1184932/banana-cat-hub1?o=sharing
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href.includes("linkvertise.com/1184932/banana-cat-hub1?o=sharing")) {
        setTimeout(() => {
            const button = document.querySelector('button[data-testid="lv-button"]');
            if (button) {
                button.click();
            }
        }, 2000);
    }

    if (window.location.href === "https://ads.luarmor.net/get_key?for=VHFslhWdrPey") {
        window.location.href = "https://link-center.net/1184932/banana-cat-hub1";
    }
})();
