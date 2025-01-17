// ==UserScript==
// @name         UwU Bypass ( flu )
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bypass so cool
// @author       Bạn
// @match        https://flux.li/android/external/start.php?HWID=*
// @match        https://flux.li/android/external/check1.php?hash={hash}*
// @match        https://linkvertise.com/580726/fluxus1*
// @match        https://linkvertise.com/580726/fluxus*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const currentUrl = window.location.href;

    if (currentUrl.startsWith('https://flux.li/android/external/start.php?HWID=')) {
        window.location.href = 'https://linkvertise.com/580726/fluxus1';
    }

    else if (currentUrl.startsWith('https://linkvertise.com/580726/fluxus1')) {
        window.location.href = 'https://flux.li/android/external/check1.php?hash={hash}';
    }

    else if (currentUrl.startsWith('https://flux.li/android/external/check1.php?hash={hash}')) {
        window.location.href = 'https://linkvertise.com/580726/fluxus';
    }

    else if (currentUrl.startsWith('https://linkvertise.com/580726/fluxus')) {
        const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';

    const button = document.createElement('button');
    button.textContent = 'Bypass';
    button.style.padding = '20px 40px';
    button.style.fontSize = '18px';
    button.style.border = 'none';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '10px';
    button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    button.style.transition = 'background-color 0.3s';

    button.addEventListener('click', function() {
        window.location.href = `https://flux.li/android/external/main.php?hash={hash}`;
    });

    overlay.appendChild(button);
    document.body.appendChild(overlay);
}

})();

