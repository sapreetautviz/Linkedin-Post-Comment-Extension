setTimeout(() => {
    console.log("🔵 Trying to comment...");

    // Find the comment box
    let commentBox = document.querySelector('div[contenteditable="true"]');

    if (commentBox) {
        commentBox.click();
        commentBox.innerText = "Great insights! Understanding AI agents' architecture and functionality is key to maximizing their impact. What are some challenges you've faced in integrating these technologies into your workflows? Let's discuss!";  // Insert comment
        console.log("✅ Comment typed.");

        // Wait before clicking the "Comment" button
        setTimeout(() => {
            // Select the correct Comment button
            let commentButton = document.querySelector('.comments-comment-box__submit-button--cr');

            if (commentButton) {
                commentButton.click();  // Click the button
                console.log("✅ Comment button clicked!");

                // Move to the next post
                setTimeout(() => {
                    chrome.storage.local.get("postUrls", (data) => {
                        let remainingPosts = data.postUrls.slice(1);
                        if (remainingPosts.length > 0) {
                            chrome.storage.local.set({ "postUrls": remainingPosts }, () => {
                                window.location.href = remainingPosts[0]; // Open next post
                            });
                        }
                    });
                }, 2000);
            } else {
                console.warn("⚠️ Comment button not found!");
            }
        }, 3000);
    } else {
        console.warn("⚠️ Comment box not found!");
    }
}, 5000);
