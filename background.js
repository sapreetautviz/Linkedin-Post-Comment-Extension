chrome.runtime.onInstalled.addListener(() => {
    console.log("LinkedIn Auto Commenter Installed!");
});

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
    });
});
