// background.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.url) {
        chrome.tabs.create({ url: request.url }); // Open the URL in a new tab
    }
});
