const staticPostLink = "https://www.linkedin.com/posts/sapreet-gujjar-669297211_ai-artificialintelligence-aiagents-activity-7305119851377762304-tH8O";
const commentText = "Great insights! Understanding AI agents' architecture and functionality is key to maximizing their impact. What are some challenges you've faced in integrating these technologies into your workflows? Let's discuss!";

async function autoComment() {
    console.log("🔵 LinkedIn Auto Commenter Running...");

    // Extract post URLs
    const postLinks = Array.from(document.querySelectorAll('a'))
        .map(a => a.href)
        .filter(link => link.includes('/posts/') && link.includes('activity'));

    if (!postLinks.includes(staticPostLink)) {
        postLinks.push(staticPostLink);
    }

    console.log("✅ Post Links Found:", postLinks);
    if (postLinks.length === 0) {
        alert("⚠️ No recent posts found!");
        return;
    }

    chrome.storage.local.set({ "postUrls": postLinks, "commentText": commentText }, () => {
        window.location.href = postLinks[0]; // Open first post
    });
}

autoComment();
