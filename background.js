chrome.runtime.onInstalled.addListener(() => {
    console.log("LinkedIn Auto Commenter Installed!");
});

// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         files: ["content.js"]
//     });
// });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("/posts/")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["comment.js"]
        });
    }
});
