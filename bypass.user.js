// ==UserScript==
// @name         Bypass Linkvertise, Loot-Link, and SocialWolvez
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bypass Linkvertise, Loot-Link, and SocialWolvez
// @author       You
// @match        https://linkvertise.com/*
// @match        https://loot-link.com/*
// @match        https://lootdest.org/*
// @match        https://socialwolvez.com/*
// @match        https://work.ink/*
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// ==/UserScript==

(function() {
    'use strict';

    function bypassLink(url) {
        const apiUrl = `https://api.bypass.vip/bypass?url=${url}`;

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
                            text: 'Bypass ez',
                            timeout: 5000
                        });
                    } else {
                        console.error('Error: Bypass failed, no result in API response.');
                        GM_notification({
                            title: 'Bypass Failed',
                            text: 'Unable to bypass the URL.',
                            timeout: 5000
                        });
                    }
                } catch (error) {
                    console.error('Error parsing API response:', error);
                    GM_notification({
                        title: 'Error',
                        text: 'There was an error processing the bypass.',
                        timeout: 5000
                    });
                }
            },
            onerror: function() {
                console.error('Error with bypass API request.');
                GM_notification({
                    title: 'Error',
                    text: 'Failed to connect to bypass API.',
                    timeout: 5000
                });
            }
        });
    }

    const targetUrl = window.location.href;
    if (targetUrl.includes('linkvertise.com') || targetUrl.includes('work.ink') || targetUrl.includes('loot-link.com') || targetUrl.includes('https://lootdest.org/') || targetUrl.includes('socialwolvez.com')) {
        bypassLink(targetUrl);
    }
})();
