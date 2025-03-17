document.getElementById("start").addEventListener("click", () => {
    console.log("Extension Button Clicked");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let activeTab = tabs[0];

        // Prevent running on chrome:// or other restricted pages
        if (!activeTab || !activeTab.url || activeTab.url.startsWith("chrome://") || activeTab.url.startsWith("edge://") || activeTab.url.startsWith("about:")) {
            alert("This extension cannot run on Chrome system pages.");
            return;
        }

        console.log("Executing script on:", activeTab.url);

        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            files: ["content.js"]
        }).catch((error) => console.error("Script Injection Error:", error));
    });
});
