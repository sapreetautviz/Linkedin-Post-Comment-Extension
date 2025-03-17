setTimeout(() => {
    chrome.storage.local.get(["isRunning", "postUrls", "commentText"], (data) => {
        if (!data.isRunning) {
            console.log("🚫 Auto Commenter Stopped.");
            return;
        }

        console.log("🔵 Trying to comment...");

        let commentBox = document.querySelector('div[contenteditable="true"]');

        if (commentBox) {
            commentBox.click();
            commentBox.innerText = data.commentText;

            setTimeout(() => {
                let commentButton = document.querySelector('.comments-comment-box__submit-button--cr');

                if (commentButton) {
                    commentButton.click();
                    console.log("✅ Comment posted!");

                    setTimeout(() => {
                        let remainingPosts = data.postUrls.slice(1);

                        if (remainingPosts.length > 0) {
                            chrome.storage.local.set({ "postUrls": remainingPosts }, () => {
                                setTimeout(() => {
                                    window.location.href = remainingPosts[0];
                                }, Math.random() * (10000 - 5000) + 5000); // Random delay between 5s-10s
                            });
                        } else {
                            console.log("✅ All posts commented. Restarting in 10 seconds...");
                            chrome.storage.local.set({ isRunning: false });

                            setTimeout(() => {
                                chrome.storage.local.set({ isRunning: true }, () => {
                                    window.location.reload();
                                });
                            }, 10000); // Restart after 10 seconds
                        }
                    }, 2000);
                } else {
                    console.warn("⚠️ Comment button not found!");
                }
            }, 3000);
        } else {
            console.warn("⚠️ Comment box not found!");
        }
    });
}, 5000);
