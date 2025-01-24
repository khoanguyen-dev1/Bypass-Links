// ==UserScript==
// @name         UwU Bypass
// @namespace    http://tampermonkey.net/
// @version      0.10
// @description  Bypass so cool
// @author       UwU
// @match        *://trigonevo.fun/whitelist/?HWID=*
// @match        *://linkvertise.com/*
// @match        https://linkvertise.com/580726/fluxus1*
// @match        https://linkvertise.com/580726/fluxus*
// @match        https://loot-link.com/*
// @match        https://loot-links.com/*
// @match        https://lootdest.org/*
// @match        https://socialwolvez.com/*
// @match        https://key.fluxteam.org/*
// @match        https://getzorara.online:2053/*
// @match        https://key.getwave.gg/*
// @match        https://pandadevelopment.net/getkey?service=beeconhub*
// @match        https://flux.li/android/external/start.php?HWID*
// @match        https://flux.li/android/external/check1.php?hash={hash}*
// @match        https://spdmteam.com/key-system-1?hwid=*
// @match        https://spdmteam.com/key-system-2?hwid=*
// @match        https://spdmteam.com/key-system-3?hwid=*
// @match        https://keyguardian.org/a/1096?id=*
// @match        https://getswift.xyz/real/*
// @match        https://mobile.codex.lol/*
// @match        https://ads.luarmor.net/get_key?for=Lootlab_Test-CGzonCNhjjyI
// @match        https://ads.luarmor.net/get_key?for=-CGzonCNhjjyI
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
        let buttonClicked = false;

    setTimeout(function() {
        if (!buttonClicked) {
            const button = document.querySelector("#tablebodyuserarea > tr > td:nth-child(4) > button");
            if (button) {
                logToContainer('Auto Click button');
                button.click();
                buttonClicked = true;
            } else {
                console.log("Không tìm thấy nút!");
            }
        }
    }, 5000);

        if (currentUrl.includes("https://ads.luarmor.net/get_key?for=Lootlab_Test-CGzonCNhjjyI") || currentUrl.includes('https://ads.luarmor.net/get_key?for=-CGzonCNhjjyI')) {
    var nextButton = document.querySelector("#nextbtn");
    if (nextButton) {
        nextButton.click();
    } else {
        console.log('Button không tìm thấy!');
    }
}


        if (currentUrl.includes('trigonevo.fun/whitelist/?HWID=')) {
            const divElement = document.querySelector('div.glass-light.bg-blue-600.bg-opacity-20.hover-glow.cursor-pointer.rounded-lg.p-4.border-l-4.border-blue-400.shadow-md.relative.overflow-hidden');
        if (divElement) {
            divElement.click();
            logToContainer('Click button');
        } else {
            logToContainer('whitelist');
        }
    }


        if (currentUrl.startsWith('https://flux.li/android/external/start.php?HWID=')) {
    setTimeout(function() {
        window.location.href = 'https://linkvertise.com/580726/fluxus1';
    }, 5000);
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
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';

    const countdownText = document.createElement('div');
    countdownText.style.fontSize = '30px';
    countdownText.style.marginBottom = '20px';
    countdownText.style.fontWeight = 'bold';
    countdownText.textContent = 'Time : 5s';

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

    let timeLeft = 5;
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

        if (currentUrl.includes('https://keyguardian.org/a/1096?id=')) {
             keyguardian();
        }

        if (currentUrl.startsWith('https://loot-links.com/s?mK6Z')) {
    setTimeout(function() {
        window.location.href = 'https://mobile.codex.lol/?page=tasks';
        logToContainer('wait 5 second');
    }, 5000);
}

        if (currentUrl.startsWith('https://linkvertise.com/654032/codex-gateway-2')) {
    setTimeout(function() {
        window.location.href = 'https://mobile.codex.lol/?page=tasks';
        logToContainer('wait 5 second');
    }, 5000);
}

        if (currentUrl.startsWith('https://loot-link.com/s?oiQO')) {
    setTimeout(function() {
        window.location.href = 'https://mobile.codex.lol/?page=tasks';
         logToContainer('wait 5 second');
    }, 5000);
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
          if (currentUrl.startsWith("https://getswift.xyz/real/0/") ||
            currentUrl.startsWith("https://getswift.xyz/real/1/") ||
            currentUrl.startsWith("https://getswift.xyz/real/2/")) {
            setInterval(function() {
                const button = document.querySelector("body > div > form > div.flex.flex-col.w-full.mb-\\[2rem\\].items-center > button");
                if (button) {
                    button.click();
                    logToContainer('Bypass Click button');
                }
            }, 1000);
        }

          if (currentUrl.startsWith("https://getswift.xyz/real/3/")) {
            logToContainer("Vui lòng nhấn 'Get Key'");
        }

        if (window.location.href.includes('https://mobile.codex.lol/')) {
        const codex = document.querySelector('div.glass-light.bg-blue-600.bg-opacity-20.hover-glow.cursor-pointer.rounded-lg.p-4.border-l-4.border-blue-400.shadow-md.relative.overflow-hidden');
        if (codex) {
            codex.click();
        }
    }

    });

    function handleSpecialUrls(logContainer) {
    logToContainer(logContainer, 'Vui lòng chờ để bypass');
    setTimeout(function() {
        const currentUrl = window.location.href;

        if (currentUrl.includes("https://linkvertise.com/580726/fluxus1") || currentUrl.includes("https://loot-links.com/s?mK6Z") || currentUrl.includes("https://linkvertise.com/654032/codex-gateway-2") || currentUrl.includes("https://loot-link.com/s?oiQO")) {
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

    function keyguardian(logContainer) {
        const button1 = document.querySelector('div.flex.items-center.p-6.pt-0.relative a.w-full.group');
        if (button1) {
            button1.click();
            logToContainer(logContainer, 'Bypass Button clicked');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            return;
        }

        if (window.location.href.includes('&providerId=')) {
            const button2 = document.querySelector("body > main > div > div > div.items-center.p-6.pt-0.flex.justify-between > button");
            if (button2) {
                button2.click();
                logToContainer(logContainer, 'Click button continue');
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        }
    }

    setTimeout(() => {
        const logContainer = document.createElement('div');
        document.body.appendChild(logContainer);
        clickButton(logContainer);
    }, 1000);

})();
