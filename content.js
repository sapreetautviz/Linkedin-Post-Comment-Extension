let isRunning = false;
const maxPosts = 10;
const staticPostLink = "https://www.linkedin.com/posts/sapreet-gujjar-669297211_ai-artificialintelligence-aiagents-activity-7305119851377762304-tH8O";
const commentText = "Great insights! Understanding AI agents' architecture and functionality is key to maximizing their impact. What are some challenges you've faced in integrating these technologies into your workflows? Let's discuss!";

async function autoComment() {
    console.log("🔵 LinkedIn Auto Commenter Running...");

    let postLinks = Array.from(document.querySelectorAll('a'))
        .map(a => a.href)
        .filter(link => link.includes('/posts/') && link.includes('activity'));

    if (!postLinks.includes(staticPostLink)) {
        postLinks.push(staticPostLink);
    }

    postLinks = await fetchMorePosts(postLinks);

    chrome.storage.local.set({ "postUrls": postLinks.slice(0, maxPosts), "commentText": commentText, "isRunning": true }, () => {
        window.location.href = postLinks[0]; // Open first post
    });
}

async function fetchMorePosts(existingPosts) {
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise(r => setTimeout(r, 3000));

    let newPosts = Array.from(document.querySelectorAll('a'))
        .map(a => a.href)
        .filter(link => link.includes('/posts/') && link.includes('activity'));

    return [...new Set([...existingPosts, ...newPosts])];
}

autoComment();
