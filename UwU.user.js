// ==UserScript==
// @name         UwU Bypass
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  Bypass so cool
// @author       UwU
// @match        *://trigonevo.fun/whitelist/?HWID=*
// @match        *://linkvertise.com/*
// @match        https://loot-link.com/*
// @match        https://lootdest.org/*
// @match        https://socialwolvez.com/*
// @match        https://key.fluxteam.org/*
// @match        https://getzorara.online:2053/*
// @match        https://key.getwave.gg/*
// @match        https://pandadevelopment.net/getkey?service=beeconhub*
// @match        https://flux.li/android/external/start.php?HWID*
// @match        https://spdmteam.com/key-system-1?hwid=*
// @match        https://spdmteam.com/key-system-2?hwid=*
// @match        https://spdmteam.com/key-system-3?hwid=*
// @run-at       document-start
// @icon         https://cdn.discordapp.com/avatars/1248562467240542208/a15472d7a7c67389033a031fc62e98a2.png?size=4096
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


        if (currentUrl.includes('trigonevo.fun/whitelist/?HWID=')) {
            const divElement = document.querySelector('div.glass-light.bg-blue-600.bg-opacity-20.hover-glow.cursor-pointer.rounded-lg.p-4.border-l-4.border-blue-400.shadow-md.relative.overflow-hidden');
        if (divElement) {
            divElement.click();
            logToContainer('Click button');
        } else {
            logToContainer('whitelist');
        }
    }


        if (currentUrl.includes('https://flux.li/android/external/start.php?HWID=')) {
            let newUrl = 'https://stickx.top/key-fluxus/?url=' + encodeURIComponent(currentUrl);
            logToContainer("Redirecting to new URL: " + newUrl);
            window.location.href = newUrl;
        }

        if (currentUrl === "https://getzorara.online:2053/") {
            setTimeout(function() {
                const button = document.getElementById('generate-btn');
                if (button) {
                    button.click();
                    logToContainer('Clicked Generate Button');
                }
            });
        }

        if (currentUrl.includes('key.fluxteam.org')) {
            handleGenerateButton();
        }

        if (currentUrl.includes('loot-link.com') || currentUrl.includes('lootdest.org') || currentUrl.includes('linkvertise.com')) {
            handleSpecialUrls();
        }

        if (currentUrl.includes('pandadevelopment.net/getkey?service=beeconhub')) {
            clickButton();
        }

        if (currentUrl.includes("https://spdmteam.com/key-system-3?hwid=")) {
            const targetUrl = "https://direct-link.net/376138/arceus-x-neo-key-system-3";
            window.location.href = targetUrl;
        } else if (currentUrl.includes("https://spdmteam.com/key-system-2?hwid=")) {
            const targetUrl = "https://direct-link.net/376138/arceus-x-neo-key-system-2";
            window.location.href = targetUrl;
        } else if (currentUrl.includes("https://spdmteam.com/key-system-1?hwid=")) {
            logToContainer('Vui lòng xác minh capcha');
        }
    });

    function handleSpecialUrls(logContainer) {
    logToContainer(logContainer, 'Vui lòng chờ để bypass');
    setTimeout(function() {
        const currentUrl = window.location.href;

        // Kiểm tra nếu URL là những link mà bạn không muốn chuyển hướng
        if (currentUrl.includes("https://linkvertise.com/580726/fluxus1") || currentUrl.includes("https://linkvertise.com/580726/fluxus")) {
            logToContainer(logContainer, 'URL là link không cần bypass');
            return; // Dừng lại, không thực hiện bypass
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

    function handleGenerateButton() {
        const generateButton = document.querySelector('button.generate-button');
        if (generateButton) {
            logToContainer('Clicking generate button...');
            generateButton.click();

            setTimeout(() => {
                const finalUrlElement = document.querySelector('.key-display');
                if (finalUrlElement) {
                    const finalUrl = finalUrlElement.textContent.trim();
                    if (finalUrl) {
                        logToContainer(`Redirecting to: ${finalUrl}`);
                        window.location.href = finalUrl;
                    } else {
                        logToContainer('No URL found after clicking generate.');
                    }
                } else {
                    logToContainer('Key display not found.');
                }
            }, 5000);
        } else {
            logToContainer('Use key');
        }
    }

    function clickButton() {
        const button1 = document.querySelector('a.button-simple[href*="getkey?service=beeconhub"][href*="checkpoints=48"]');
        if (button1) {
            button1.click();
            logToContainer('Bypass Button clicked');
            return;
        }

        if (window.location.href.includes('checkpoints=48')) {
            const button2 = document.querySelector('button.button-simple.w-inline-block');
            if (button2) {
                button2.click();
                logToContainer('Click button continue');
            }
        }
    }

})();

