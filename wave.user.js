// ==UserScript==
// @name         Bypass Wave
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bypass Wave
// @author       UwU
// @match        https://key.getwave.gg/*
// @match        https://loot-link.com/*
// @match        https://lootdest.com/*
// @match        https://linkvertise.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // tạo button log thông báo
    const logContainer = document.createElement('div');
    logContainer.style.position = 'fixed';
    logContainer.style.bottom = '10px';
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
    document.body.appendChild(logContainer);

    function logToContainer(message) {
        const logMessage = document.createElement('div');
        logMessage.textContent = message;
        logContainer.appendChild(logMessage);
    }


    if (window.location.href === "https://key.getwave.gg/") {
        window.location.href = "https://key.getwave.gg/freemium-tasks";
        logToContainer('Đang chuyển hướng đến https://key.getwave.gg/freemium-tasks');
    }
    else if (window.location.href.includes("https://loot-link.com/") || window.location.href.includes("https://lootdest.com/") || window.location.href.includes("https://linkvertise.com/")) {
        logToContainer('Vui long chờ 5 giây để bypass');

        setTimeout(function() {
            const currentUrl = window.location.href;

            // ktra link có mã hóa hay hông
            const redirectParamIndex = currentUrl.indexOf("&redirect=");
            if (redirectParamIndex !== -1) {
                // nếu có sẽ trả url về nguyên trạng
                const encodedRedirectUrl = currentUrl.substring(redirectParamIndex + 10); 
                const decodedUrl = decodeURIComponent(encodedRedirectUrl); 

                // Log and redirect to the decoded URL
                logToContainer(`Redirecting to: ${decodedUrl}`);
                window.location.href = decodedUrl;
            } else {
                // sau link k có mã hóa sẽ bypass
                const bypassUrl = `https://bypass.vip/userscript?url=${encodeURIComponent(currentUrl)}&time=10&key=`;
                logToContainer(`Redirecting to bypass URL: ${bypassUrl}`);
                window.location.href = bypassUrl;
            }
        }, 5000);
    }
    else {
        function clickStep1() {
            const step1Element = document.querySelector('h1.cursor-pointer.text-3xl.max-w-3xl.mx-auto.text-center.font-semibold');
            if (step1Element) {
                step1Element.click();
                logToContainer('Bypass Step');
                clearInterval(step1ClickInterval);
            }
        }
        const step1ClickInterval = setInterval(clickStep1, 2000);
    }
})();

