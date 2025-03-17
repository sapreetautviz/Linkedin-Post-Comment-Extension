document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("toggle");

    // Check the current state from storage
    chrome.storage.local.get("isRunning", (data) => {
        if (data.isRunning) {
            button.textContent = "Stop";
            button.style.background = "#d9534f"; // Red color for stop
        } else {
            button.textContent = "Start";
            button.style.background = "#0073b1"; // LinkedIn blue for start
        }
    });

    button.addEventListener("click", () => {
        chrome.storage.local.get("isRunning", (data) => {
            const isRunning = !data.isRunning; // Toggle state
            chrome.storage.local.set({ isRunning });

            if (isRunning) {
                button.textContent = "Stop";
                button.style.background = "#d9534f";

                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                    let activeTab = tabs[0];

                    if (!activeTab || !activeTab.url || activeTab.url.startsWith("chrome://") || activeTab.url.startsWith("edge://") || activeTab.url.startsWith("about:")) {
                        alert("This extension cannot run on Chrome system pages.");
                        return;
                    }

                    console.log("Starting Auto Commenter on:", activeTab.url);

                    chrome.scripting.executeScript({
                        target: { tabId: activeTab.id },
                        files: ["content.js"]
                    }).catch((error) => console.error("Script Injection Error:", error));
                });
            } else {
                button.textContent = "Start";
                button.style.background = "#0073b1";
                console.log("Auto Commenter Stopped.");
            }
        });
    });
});
