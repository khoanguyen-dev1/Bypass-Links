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
// @grant        GM_notification
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @icon         https://cdn.discordapp.com/avatars/1248562467240542208/a15472d7a7c67389033a031fc62e98a2.png?size=4096
// ==/UserScript==

(function() {
    'use strict';

    const MAX_RETRIES = 3;
    const RETRY_DELAY = 5000;

    function clickContinueButton() {
        const currentUrl = window.location.href;

        if (currentUrl.startsWith('https://getkey.relzscript.xyz/check1.php') ||
            currentUrl.startsWith('https://getkey.relzscript.xyz/check2.php')) {

            const continueButton = document.querySelector("body > div > div > div.flex.justify-center.items-center.w-full.gap-2.flex-col > a.w-full.text-sm.rounded-md.bg-neutral-50.hover\\:bg-neutral-300.text-neutral-950.p-2.font-medium.text-center.flex.items-center.justify-center.gap-1");

            if (continueButton) {
                console.log(`Clicking the continue button for ${currentUrl}...`);
                continueButton.click();  
            } else {
                console.log(`Continue button not found for ${currentUrl}.`);
            }
        }
        else if (currentUrl.startsWith('https://getkey.relzscript.xyz/check3.php')) {

            const continueButton = document.querySelector("body > div > div > div.flex.justify-center.items-center.w-full.gap-2.flex-col > a.w-full.rounded-md.bg-neutral-50.hover\\:bg-neutral-300.text-neutral-950.p-2.font-medium.text-center.flex.items-center.justify-center.gap-1");

            if (continueButton) {
                console.log(`Clicking the continue button for ${currentUrl}...`);
                continueButton.click(); 
            } else {
                console.log(`Continue button not found for ${currentUrl}.`);
            }
        }
    }


    function bypassLink(url, retries = 0) {
        GM_notification({
            title: 'Bypassing Link...',
            text: 'Please wait while we bypass the URL.',
            timeout: 5000
        });

        const apiUrl = `https://ethos.kys.gay/api/free/bypass?url=${url}`;

        GM_xmlhttpRequest({
            method: 'GET',
            url: apiUrl,
            onload: function(response) {
                try {
                    const data = JSON.parse(response.responseText);

                    if (data && data.result) {
                        window.location.href = data.result; 
                        GM_notification({
                            title: 'Bypass Successful',
                            text: 'Successfully bypassed the link!',
                            timeout: 5000
                        });
                    } else {
                        console.error('Error: Bypass failed, no result in API response.');
                        GM_notification({
                            title: 'Bypass Failed',
                            text: 'Unable to bypass the URL.',
                            timeout: 5000
                        });
                        if (retries < MAX_RETRIES) {
                            console.log(`Retrying... Attempt ${retries + 1} of ${MAX_RETRIES}`);
                            setTimeout(() => bypassLink(url, retries + 1), RETRY_DELAY);
                        } else {
                            console.log('Max retries reached.');
                        }
                    }
                } catch (error) {
                    console.error('Error parsing API response:', error);
                    GM_notification({
                        title: 'Error',
                        text: 'There was an error processing the bypass.',
                        timeout: 5000
                    });
                    if (retries < MAX_RETRIES) {
                        console.log(`Retrying... Attempt ${retries + 1} of ${MAX_RETRIES}`);
                        setTimeout(() => bypassLink(url, retries + 1), RETRY_DELAY);
                    } else {
                        console.log('Max retries reached.');
                    }
                }
            },
            onerror: function() {
                console.error('Error with bypass API request.');
                GM_notification({
                    title: 'Error',
                    text: 'Failed to connect to bypass API.',
                    timeout: 5000
                });
                if (retries < MAX_RETRIES) {
                    console.log(`Retrying... Attempt ${retries + 1} of ${MAX_RETRIES}`);
                    setTimeout(() => bypassLink(url, retries + 1), RETRY_DELAY);
                } else {
                    console.log('Max retries reached.');
                }
            }
        });
    }

    function handleGenerateButton() {
        const generateButton = document.querySelector('button.generate-button');

        if (generateButton) {
            generateButton.click();
            console.log('Button clicked!');
            GM_notification({
                title: 'Button Clicked',
                text: 'The Generate Key button was clicked successfully!',
                timeout: 5000
            });

            setTimeout(() => {
                if (document.querySelector('.key-display')) {
                    const finalUrl = document.querySelector('.key-display').textContent.trim();
                    if (finalUrl) {
                        bypassLink(finalUrl);
                    } else {
                        console.log('No bypass URL found after clicking the button.');
                        GM_notification({
                            title: 'Error',
                            text: 'No bypass URL found after clicking the button.',
                            timeout: 5000
                        });
                    }
                } else {
                    console.log('Key display not found or not yet available.');
                }
            }, 5000);
        } else {
            console.log('Generate Key button not found.');
        }
    }


    window.addEventListener('load', function() {
        const currentUrl = window.location.href;

        if (currentUrl.includes('getkey.relzscript.xyz')) {
            clickContinueButton(); 
        }
        
         if (currentUrl.includes('linkvertise.com') || currentUrl.includes('work.ink') || currentUrl.includes('loot-link.com') || currentUrl.includes('https://lootdest.org/') || currentUrl.includes('socialwolvez.com')) {
            console.log('Attempting to bypass the link...');
            bypassLink(currentUrl);
        }
        
        if (currentUrl.includes('getzorara.online')) {
            handleGenerateButton();  
        }
    }, false);
})();
