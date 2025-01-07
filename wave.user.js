// ==UserScript==
// @name         Bypass Wave
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bypass Wave
// @author       UwU
// @match        https://key.getwave.gg/*
// @match        https://loot-link.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // hiện button thông báo
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
        logToContainer('Redirecting to freemium-tasks...');
    }
    // hiện để bypass
    else if (window.location.href.includes("https://loot-link.com/")) {
        const currentUrl = window.location.href;
        const bypassUrl = `https://bypass.vip/userscript?url=${encodeURIComponent(currentUrl)}&time=10&key=`;
        window.location.href = bypassUrl;
        logToContainer(`Redirecting to: ${bypassUrl}`);
    }
    else {
        function clickStep1() {
            const step1Element = document.querySelector('h1.cursor-pointer.text-3xl.max-w-3xl.mx-auto.text-center.font-semibold');
            if (step1Element) {
                step1Element.click();
                logToContainer('Step 1 clicked!');
            }
        }
        setInterval(clickStep1, 2000);
    }
})();
