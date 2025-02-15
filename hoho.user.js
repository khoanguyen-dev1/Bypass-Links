// ==UserScript==
// @name         Hoho Hub
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  UwU
// @author       Bạn
// @match        https://ads.luarmor.net/*
// @match        https://linkvertise.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function checkLinks() {
        document.querySelectorAll('button[onclick]').forEach(button => {
            let onclickAttr = button.getAttribute('onclick');
            if (onclickAttr.includes("https://ads.luarmor.net/")) {
                let matches = onclickAttr.match(/'([^']+)'/g);
                if (matches && matches.length >= 3) {
                    let thirdLink = matches[2].replace(/'/g, '');
                    console.log("Link thứ ba:", thirdLink);

                    // Display the third link on the page
                    let linkDisplay = document.createElement('div');
                    linkDisplay.textContent = "Link thứ ba: " + thirdLink;
                    linkDisplay.style.color = 'red';
                    linkDisplay.style.marginTop = '10px';
                    button.parentNode.insertBefore(linkDisplay, button.nextSibling);

                    // Directly navigate to the third link in the same tab
                    window.location.href = thirdLink;
                }
            }
        });
    }

    window.addEventListener('load', function() {
        if (window.location.hostname === "ads.luarmor.net") {
            setTimeout(checkLinks, 2000); 
        }
    });

    function autoClickLinkvertiseButton() {
        if (window.location.hostname === "linkvertise.com") {
            setTimeout(function() {
                const button = document.querySelector("body > lv-root > div > mat-sidenav-container > mat-sidenav-content > div.mb-0.content.p-0 > lv-link-detail-page > div.main-content > div > div.main-content__wrapper.main-content__wrapper--right > lv-action-box > div > lv-lib-card > div > div > div:nth-child(3) > div > lv-lib-button > button");

                if (button) {
                    button.click();
                    console.log('Button clicked on Linkvertise');
                } else {
                    console.log('Button not found on Linkvertise.');
                }
            }, 5000);
        }
    }

    window.addEventListener('load', function() {
        if (window.location.hostname === "linkvertise.com") {
            autoClickLinkvertiseButton();
        }
    });
})();
