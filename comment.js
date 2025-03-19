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
        setTimeout(() => {
          commentBox.innerText = data.postUrls[0].comment;
  
          setTimeout(() => {
            let commentButton = document.querySelector('.comments-comment-box__submit-button--cr');
  
            if (commentButton) {
              commentButton.click();
              console.log("✅ Comment posted!");
              
  
              setTimeout(() => {
                // Remove the current post from the list and update storage
                let remainingPosts = data.postUrls.slice(1); // Shift to the next post
                if (remainingPosts.length > 0) {
                  chrome.storage.local.set({ "postUrls": remainingPosts }, () => {
                    let randomDelay = Math.random() * (45000 - 15000) + 15000; // 15-45 sec delay
                    console.log(`⏳ Waiting ${randomDelay / 1000} sec before next post...`);
  
                    setTimeout(() => {
                      window.location.href = remainingPosts[0].url;
                    }, randomDelay);
                  });
                } else {
                  console.log("✅ All posts commented. Stopping...");
                  chrome.storage.local.set({ isRunning: false });
                }
              }, 5000);
            } else {
              console.warn("⚠️ Comment button not found!");
            }
          }, 3000);
        }, 2000);
      } else {
        console.warn("⚠️ Comment box not found!");
      }
    });
  }, 5000);
  