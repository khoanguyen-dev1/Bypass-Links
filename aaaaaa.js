// ==UserScript==
// @name         Check and Print Third Link
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Log output to a smaller visible section on the page
// @author       Bạn
// @match        https://flux.li/*
// @match        https://spdmteam.com/*
// @match        https://mobile.codex.lol/*
// @match        https://loot-links.com/*
// @match        https://linkvertise.com/*
// @grant        none
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
        logContainer.style.fontFamily = `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;
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

    function startLoading() {
        let loadingBox = document.createElement('div');
        loadingBox.id = 'loadingBox';
        loadingBox.style.position = 'fixed';
        loadingBox.style.top = '50%';
        loadingBox.style.left = '50%';
        loadingBox.style.transform = 'translate(-50%, -50%) translateY(-20px)';
        loadingBox.style.opacity = '0';
        loadingBox.style.background = 'linear-gradient(135deg, #7289da, #2c2f33)';
        loadingBox.style.color = 'white';
        loadingBox.style.padding = '30px';
        loadingBox.style.borderRadius = '10px';
        loadingBox.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        loadingBox.style.textAlign = 'center';
        loadingBox.style.zIndex = '9999';
        loadingBox.style.minWidth = '350px';
        loadingBox.style.fontFamily = `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;
        loadingBox.style.transition = 'opacity 500ms ease, transform 500ms ease';

        let loadingText = document.createElement('div');
        loadingText.innerText = 'Loading Userscript';
        loadingText.style.fontSize = '20px';
        loadingText.style.marginBottom = '20px';
        loadingBox.appendChild(loadingText);

        let barContainer = document.createElement('div');
        barContainer.id = 'loadingBarContainer';
        barContainer.style.width = '100%';
        barContainer.style.height = '12px';
        barContainer.style.background = 'rgba(0, 0, 0, 0.2)';
        barContainer.style.borderRadius = '6px';
        barContainer.style.overflow = 'hidden';
        barContainer.style.marginTop = '10px';
        loadingBox.appendChild(barContainer);

        let loadingBar = document.createElement('div');
        loadingBar.id = 'loadingBar';
        loadingBar.style.height = '100%';
        loadingBar.style.width = '100%';
        loadingBar.style.background = 'linear-gradient(90deg, #99aab5, #7289da)';
        loadingBar.style.transformOrigin = 'right';
        loadingBar.style.transition = 'transform 10s linear';
        barContainer.appendChild(loadingBar);

        document.body.appendChild(loadingBox);

        requestAnimationFrame(() => {
            loadingBox.style.opacity = '1';
            loadingBox.style.transform = 'translate(-50%, -50%) translateY(0)';
        });

        requestAnimationFrame(() => {
            loadingBar.style.transform = 'scaleX(0)';
        });

        setTimeout(() => {
            loadingBox.style.opacity = '0';
            loadingBox.style.transform = 'translate(-50%, -50%) translateY(20px)';
            setTimeout(() => {
                if (loadingBox.parentNode) {
                    loadingBox.parentNode.removeChild(loadingBox);
                }
            }, 500);
        }, 1000);
    }

    window.addEventListener("load", function() {
        createLogContainer(); 
        startLoading(); 
        const currentUrl = window.location.href;

        if (currentUrl.startsWith('https://flux.li/android/external/start.php?HWID=')) {
            const paragraph = document.querySelector('p[data-aos="fade-left"]');
            if (paragraph) {
                const button = document.createElement('button');
                button.textContent = 'Click vào màn hình';
                document.body.style.margin = '0';
                document.body.style.height = '100vh';

                button.style.position = 'fixed';  // Đặt nút cố định trên màn hình
                button.style.top = '0';
                button.style.left = '0';
                button.style.width = '100vw';  // Đảm bảo nút chiếm toàn bộ chiều rộng
                button.style.height = '100vh';  // Đảm bảo nút chiếm toàn bộ chiều cao
                button.style.backgroundColor = '#4CAF50';
                button.style.color = 'white';  // Màu chữ nút
                button.style.border = 'none';
                button.style.fontSize = '18px';
                button.style.cursor = 'pointer';
                button.style.borderRadius = '0';  // Không bo góc
                button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                button.style.display = 'flex';
                button.style.alignItems = 'center';
                button.style.justifyContent = 'center';
                button.style.transition = 'background-color 0.3s';

                button.addEventListener('click', function() {
                    window.location.href = `https://linkvertise.com/580726/fluxus1`;
                });

                document.body.appendChild(button);
            }
        }

        if (currentUrl.startsWith('https://linkvertise.com/580726/fluxus1')) {
            window.location.href = 'https://flux.li/android/external/check1.php?hash={hash}';
        } else if (currentUrl.startsWith('https://flux.li/android/external/check1.php?hash={hash}')) {
            window.location.href = 'https://linkvertise.com/580726/fluxus';
        } else if (currentUrl.startsWith('https://linkvertise.com/580726/fluxus')) {
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            overlay.style.zIndex = '9999';
            overlay.style.display = 'flex';
            overlay.style.flexDirection = 'column';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';

            const countdownText = document.createElement('div');
            countdownText.style.fontSize = '30px';
            countdownText.style.marginBottom = '20px';
            countdownText.style.fontWeight = 'bold';
            countdownText.textContent = 'Time : 3s';

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
            button.style.display = 'none';

            button.addEventListener('click', function() {
                window.location.href = `https://flux.li/android/external/main.php?hash={hash}`;
            });

            overlay.appendChild(countdownText);
            overlay.appendChild(button);
            document.body.appendChild(overlay);

            let timeLeft = 3;
            const countdownInterval = setInterval(function() {
                timeLeft--;
                countdownText.textContent = `Time : ${timeLeft}s`;
                if (timeLeft <= 0) {
                    clearInterval(countdownInterval);
                    countdownText.textContent = 'Click Bypass';
                    button.style.display = 'block';
                }
            }, 1000);
        }

    });
})();
