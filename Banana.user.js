// ==UserScript==
// @name         UwU Bypass ( Banana )
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bypass Banana
// @author       UwU
// @match        https://ads.luarmor.net/get_key?for=-VHFslhWdrPey*
// @match        *://linkvertise.com/1184932/banana-cat-hub1?o=sharing
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function checkButtonStatus() {
        const button = document.querySelector('#nextbtn');

        if (button) {
            const isCooldown = button.style.cursor === 'not-allowed';

            if (isCooldown) {
                console.log('Button is in cooldown. Disabling it...');
                button.disabled = true;
                button.style.cursor = 'not-allowed';
            } else {
                console.log('Button is clickable. Enabling it...');
                button.disabled = false;
                button.style.cursor = 'pointer';

                    window.location.href = 'https://link-center.net/1184932/banana-cat-hub1';
            }
        } 
    }
    setInterval(checkButtonStatus, 10000);

window.addEventListener('load', function() {
    let buttonClicked = false;

    setTimeout(function() {
        if (!buttonClicked) {
            const button = document.querySelector("#tablebodyuserarea > tr > td:nth-child(4) > button");
            if (button) {
                console.log("Nút được tìm thấy, đang click...");
                button.click();
                buttonClicked = true;
            } else {
                console.log("Không tìm thấy nút!");
            }
        }
    }, 5000);
});

if (window.location.href.includes("linkvertise.com/1184932/banana-cat-hub1?o=sharing")) {
setTimeout(function() {
        window.close();
    }, 5000);
}
if (window.location.href.includes("linkvertise.com/1184932/banana-cat-hub1?o=sharing")) {
    setTimeout(() => {
        const button = document.querySelector('button[data-testid="lv-button"]');
        if (button) {
            button.click();
        }
    }, 2000);
}


})();
