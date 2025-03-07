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

    // Định nghĩa hàm APIKEY để lấy key
   

    // Đối tượng chứa các key hợp lệ
    const validKeys = {
    "HwZVdbkwZtUAxUZjzpMy": null,
    "NZqDpOyfnxWmUuePtHuH": null,
    "KKXdaBbymJAgNaKypHLX": null,
    "ZBetGlMYbUYwueClNmCs": null,
    "iPgfhxnArXsPVpMnBEjA": null,
    "bcuowfZWVxCqOGewdsWd": null,
    "evrPbvkKLyUjNYqjDyEP": null,
    "lITGGhLmwPEfSdlQLHUp": null,
    "IoXHNdnkjKLhuCmSeqJH": null,
    "xIHGqlHBSehgzXRtuCUI": null,
    "devduck": null,
    "iTrhFODvFWjpgrOlQytT": null
    };

    // Kiểm tra key người dùng nhập vào
    function checkKey() {
        // Yêu cầu người dùng nhập key nếu chưa có window.key
        if (!window.key) {
            const userInputKey = prompt("Nhập key để tiếp tục:");

            if (validKeys.hasOwnProperty(userInputKey)) {
                // Lưu key vào window.key nếu đúng
                window.key = userInputKey;
                alert("Key hợp lệ! Tiến hành thực thi script.");
                return true;  // Nếu key đúng, trả về true
            } else {
                alert("Key không hợp lệ! Script không thể thực thi.");
                return false;  // Nếu key sai, trả về false
            }
        }
        return validKeys.hasOwnProperty(window.key);
    }

    // Kiểm tra key và thực thi nếu hợp lệ
    if (checkKey()) {
        console.log("Key hợp lệ! Tiến hành thực thi chức năng premium.");

        // Tiến hành các chức năng premium hoặc tải nội dung tùy theo yêu cầu
        // Ví dụ: gọi một hàm nào đó hoặc tải nội dung premium

        // Tạo container log
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

        // Run on DOMContentLoaded
        window.addEventListener("load", function() {
            createLogContainer(); // Create the log container when the page loads
            startLoading(); // Start the loading animation and logging
            const currentUrl = window.location.href;

            // Thực hiện các hành động tiếp theo
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
 if (currentUrl.includes("https://spdmteam.com/key-system-3?hwid=")) {
            const targetUrl = "https://loot-link.com/s?qlbU";
            window.location.href = targetUrl;
        } else if (currentUrl.includes("https://spdmteam.com/key-system-2?hwid=")) {
            const targetUrl = "https://loot-link.com/s?mYit";
            window.location.href = targetUrl;
        } else if (currentUrl.includes("https://spdmteam.com/key-system-1?hwid=")) {
            logToContainer('Vui lòng xác minh capcha');
        }
          else if (currentUrl.includes('https://linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing')) {
       window.location.href = 'https://lootdest.com/s?qljL';
   }
        else if (currentUrl.includes('https://lootdest.com/s?qljL')) {
       window.location.href = 'https://spdmteam.com/api/keysystem?step=1&advertiser=linkvertise&OS=ios';
   }
       else if (currentUrl.includes('https://loot-link.com/s?mYit')) {
       window.location.href = 'https://spdmteam.com/api/keysystem?step=2&advertiser=linkvertise&OS=ios';
   }
       else if (currentUrl.includes('https://loot-link.com/s?qlbU')) {
       window.location.href = 'https://spdmteam.com/api/keysystem?step=3&advertiser=linkvertise&OS=ios';
   }
if (window.location.href.includes('https://mobile.codex.lol/')) {
    setTimeout(() => {
        const targetElement = document.querySelector('.absolute.-inset-0\\.5.bg-red-500\\/30.opacity-20.rounded-lg.blur.group-hover\\:opacity-60.transition.duration-1000.group-hover\\:duration-200');

        if (targetElement) {
            targetElement.click();
            console.log('Phần tử đã được click!');
        } else {
            console.log('Không tìm thấy phần tử cần click.');
        }

        // Wait for 2 seconds (2000ms) before showing the alert
        setTimeout(() => {
            // Display a prompt asking the user for input
            const userInput = prompt("Please enter a number (1, 2, or 3):");

            // If the user enters "1", click the Read Articles button
            if (userInput === "1") {
                const readArticlesButton = document.querySelector("body > main > section > div.max-w-\\[100\\%\\].lg\\:max-w-\\[50\\%\\].justify-center.h-auto.flex.flex-col > div.flex.flex-col.gap-9 > a:nth-child(1)");
                if (readArticlesButton) {
                    readArticlesButton.click();
                    console.log('Read Articles button clicked!');
                } else {
                    console.log('Không tìm thấy nút Read Articles.');
                }
            }
            // If the user enters "2", click the Task Locked button (Task 2)
            else if (userInput === "2") {
                const taskLockedButton = document.querySelector("body > main > section > div.max-w-\\[100\\%\\].lg\\:max-w-\\[50\\%\\].justify-center.h-auto.flex.flex-col > div.flex.flex-col.gap-9 > a:nth-child(2)");
                if (taskLockedButton) {
                    taskLockedButton.click();
                    console.log('Task Locked button clicked (Task 2)!');
                } else {
                    console.log('Không tìm thấy nút Task Locked (Task 2).');
                }
            }
            // If the user enters "3", click the Task Locked button (Task 3)
            else if (userInput === "3") {
                const taskLockedButton3 = document.querySelector("body > main > section > div.max-w-\\[100\\%\\].lg\\:max-w-\\[50\\%\\].justify-center.h-auto.flex.flex-col > div.flex.flex-col.gap-9 > a:nth-child(3)");
                if (taskLockedButton3) {
                    taskLockedButton3.click();
                    console.log('Task Locked button clicked (Task 3)!');
                } else {
                    console.log('Không tìm thấy nút Task Locked (Task 3).');
                }
            } else {
                console.log('User did not enter 1, 2, or 3.');
            }

        }, 1000);

    }, 1000);
}
    if (window.location.href.startsWith('https://loot-links.com/s?mK6Z')) {
    setTimeout(function() {
        window.location.href = 'https://mobile.codex.lol/?page=tasks';
    }, 4000);
}

        if (window.location.href.startsWith('https://linkvertise.com/654032/codex-gateway-2')) {
            setTimeout(function() {
        window.location.href = 'https://mobile.codex.lol/?page=tasks';
    }, 4000);
}

        if (window.location.href.startsWith('https://loot-link.com/s?oiQO')) {
    setTimeout(function() {
        window.location.href = 'https://mobile.codex.lol/?page=tasks';
    }, 4000);
}
        });
    } else {
        alert("Key không hợp lệ! Script không thể thực thi.");
    }
})();
