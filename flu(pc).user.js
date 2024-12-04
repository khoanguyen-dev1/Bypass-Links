// ==UserScript==
// @name         Bypass Fluxus (pc)
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Bypass Fluxus (pc) by clicking "Generate Key" button first, then bypass link
// @author       UwU
// @match        https://getzorara.online/*
// @match        https://linkvertise.com/*
// @grant        GM_notification
// @grant        GM_xmlhttpRequest
// @icon         https://cdn.discordapp.com/avatars/1248562467240542208/a15472d7a7c67389033a031fc62e98a2.png?size=4096
// ==/UserScript==

(function() {
    'use strict';

    const MAX_RETRIES = 3;
    const RETRY_DELAY = 5000;


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
        const targetUrl = window.location.href;
        if (targetUrl.includes('getzorara.online')) {
            handleGenerateButton();
        }

        if (targetUrl.includes('linkvertise.com')) {
            bypassLink(targetUrl);
        }
    }, false);
})();
