// ==UserScript==
// @name         UwU Bypass
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Bypass so cool
// @author       UwU
// @match        *://getkey.relzscript.xyz/check1.php*
// @match        *://getkey.relzscript.xyz/check2.php*
// @match        *://getkey.relzscript.xyz/check3.php*
// @match        *://linkvertise.com/*
// @match        https://loot-link.com/*
// @match        https://lootdest.org/*
// @match        https://socialwolvez.com/*
// @match        https://getzorara.online/*
// @match        https://key.getwave.gg/*
// @run-at       document-start
// @icon         https://cdn.discordapp.com/avatars/1248562467240542208/a15472d7a7c67389033a031fc62e98a2.png?size=4096
// ==/UserScript==

(function() {
    'use strict';


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
    document.body.appendChild(logContainer);


    function logToContainer(message) {
        const logMessage = document.createElement('div');
        logMessage.textContent = message;
        logContainer.appendChild(logMessage);
    }

    function handleSpecialUrls() {
        if (window.location.href.includes("https://loot-link.com/") || 
            window.location.href.includes("https://lootdest.org/") || 
            window.location.href.includes("https://linkvertise.com/")) {
            
            logToContainer('Vui lòng chờ 5 giây để bypass');

            setTimeout(function() {
                const currentUrl = window.location.href;


                const redirectParamIndex = currentUrl.indexOf("&redirect=");
                if (redirectParamIndex !== -1) {
                    const encodedRedirectUrl = currentUrl.substring(redirectParamIndex + 10);
                    const decodedUrl = decodeURIComponent(encodedRedirectUrl);

                    logToContainer(`Success: ${decodedUrl}`);
                    window.location.href = decodedUrl;  
                } else {
                    const bypassUrl = `https://bypass.vip/userscript?url=${encodeURIComponent(currentUrl)}&time=5&key=`;

                    logToContainer(`ik tới link bypass: ${bypassUrl}`);
                    window.location.href = bypassUrl;  
                }
            }, 1000); 
        }
    }


    if (window.location.href === "https://key.getwave.gg/") {
        window.location.href = "https://key.getwave.gg/freemium-tasks";
        logToContainer('Đang chuyển hướng đến https://key.getwave.gg/freemium-tasks');
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

    window.addEventListener('load', function() {
        const currentUrl = window.location.href;

        if (currentUrl.includes('getkey.relzscript.xyz')) {
            clickContinueButton(); 
        }

        if (currentUrl.includes('linkvertise.com') || currentUrl.includes('loot-link.com') || currentUrl.includes('lootdest.org')) {
            logToContainer('Attempting to handle special URL...');
            handleSpecialUrls(); 
        }

        if (currentUrl.includes('getzorara.online')) {
            handleGenerateButton();  
        }
    }, false);

    function clickContinueButton() {
        const currentUrl = window.location.href;

        if (currentUrl.startsWith('https://getkey.relzscript.xyz/check1.php') ||
            currentUrl.startsWith('https://getkey.relzscript.xyz/check2.php')) {

            const continueButton = document.querySelector("body > div > div > div.flex.justify-center.items-center.w-full.gap-2.flex-col > a.w-full.text-sm.rounded-md.bg-neutral-50.hover\\:bg-neutral-300.text-neutral-950.p-2.font-medium.text-center.flex.items-center.justify-center.gap-1");

            if (continueButton) {
                logToContainer(`Clicking the continue button for ${currentUrl}...`);
                continueButton.click();  
            } else {
                logToContainer(`Continue button not found for ${currentUrl}.`);
            }
        }
        else if (currentUrl.startsWith('https://getkey.relzscript.xyz/check3.php')) {

            const continueButton = document.querySelector("body > div > div > div.flex.justify-center.items-center.w-full.gap-2.flex-col > a.w-full.rounded-md.bg-neutral-50.hover\\:bg-neutral-300.text-neutral-950.p-2.font-medium.text-center.flex.items-center.justify-center.gap-1");

            if (continueButton) {
                logToContainer(`Clicking the continue button for ${currentUrl}...`);
                continueButton.click(); 
            } else {
                logToContainer(`Continue button not found for ${currentUrl}.`);
            }
        }
    }

    function handleGenerateButton() {
        const generateButton = document.querySelector('button.generate-button');

        if (generateButton) {
            generateButton.click();
            logToContainer('Button clicked!');

            setTimeout(() => {
                if (document.querySelector('.key-display')) {
                    const finalUrl = document.querySelector('.key-display').textContent.trim();
                    if (finalUrl) {
                        handleSpecialUrls(); 
                    } else {
                        logToContainer('No bypass URL found after clicking the button.');
                    }
                } else {
                    logToContainer('Key display not found or not yet available.');
                }
            }, 5000);
        } else {
            logToContainer('Generate Key button not found.');
        }
    }
})();
