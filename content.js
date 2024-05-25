document.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "userClick" });
});

document.addEventListener('keypress', (event) => {
    chrome.runtime.sendMessage({ action: "userKeypress", key: event.key });
});