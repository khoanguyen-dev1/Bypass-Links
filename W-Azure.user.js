// ==UserScript==
// @name         Bypass W-Azure
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bypass so cool
// @author       UwU
// @match        *://trigonevo.fun/whitelist/?HWID=*
// @match        *://linkvertise.com/*
// @match        https://linkvertise.com/580726/fluxus1*
// @match        https://linkvertise.com/580726/fluxus*
// @match        https://loot-link.com/*
// @match        https://lootdest.org/*
// @match        https://ads.luarmor.net/get_key?for=Lootlab_Test-CGzonCNhjjyI
// @match        https://ads.luarmor.net/get_key?for=-CGzonCNhjjyI
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

        function createLogContainer() {
        const logContainer = document.createElement('div');
        logContainer.style.position = 'fixed';
        logContainer.style.top = '10px';
        logContainer.style.right = '10px';
        logContainer.style.maxWidth = '300px';
        logContainer.style.maxHeight = '300px';
        logContainer.style.overflowY = 'auto';
        logContainer.style.backgroundColor = '#333';
        logContainer.style.color = 'white';
        logContainer.style.padding = '10px';
        logContainer.style.fontFamily = 'monospace';
        logContainer.style.fontSize = '12px';
        logContainer.style.borderRadius = '5px';
        logContainer.style.zIndex = 1000;

        if (document.body) {
            document.body.appendChild(logContainer);
        }

        return logContainer;
    }

    function logToContainer(message) {
        const logContainer = createLogContainer();
        const logMessage = document.createElement('div');
        logMessage.textContent = message;
        logContainer.appendChild(logMessage);
    }

    window.addEventListener('load', function() {
        const currentUrl = window.location.href;
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
           if (currentUrl.includes('loot-link.com') || currentUrl.includes('lootdest.org') || currentUrl.includes('linkvertise.com')) {
            handleSpecialUrls();
        }
           if (currentUrl.includes("https://ads.luarmor.net/get_key?for=Lootlab_Test-CGzonCNhjjyI") || currentUrl.includes('https://ads.luarmor.net/get_key?for=-CGzonCNhjjyI')) {
    var nextButton = document.querySelector("#nextbtn");
    if (nextButton) {
        nextButton.click();
    } else {
        console.log('Button không tìm thấy!');
    }
} else {
    console.log("URL không khớp với điều kiện.");
}
    });

    function handleSpecialUrls(logContainer) {
    logToContainer(logContainer, 'Vui lòng chờ để bypass');
    setTimeout(function() {
        const currentUrl = window.location.href;

        if (currentUrl.includes("https://linkvertise.com/580726/fluxus1") || currentUrl.includes("https://linkvertise.com/580726/fluxus")) {
            logToContainer(logContainer, 'URL là link không cần bypass');
            return;
        }

        const redirectParamIndex = currentUrl.indexOf("&redirect=");
        if (redirectParamIndex !== -1) {
            const encodedRedirectUrl = currentUrl.substring(redirectParamIndex + 10);
            const decodedUrl = decodeURIComponent(encodedRedirectUrl);

            logToContainer(logContainer, `Success:  ${decodedUrl}`);
            window.location.href = decodedUrl;
        } else {
            const bypassUrl = `https://bypass.vip/userscript?url=${encodeURIComponent(currentUrl)}&time=1&key=`;

            logToContainer(logContainer, `Bypass URL: ${bypassUrl}`);
            window.location.href = bypassUrl;
        }
    });
}


})();
