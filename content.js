let isRunning = false;
const maxPosts = 3;

// List of predefined static post links
const staticPostLinks = [
    "https://www.linkedin.com/posts/sapreet-gujjar-669297211_ai-innovation-techrevolution-activity-7273760249700847616-pF0j/?rcm=ACoAADWc8_EBu_pwNKtt5d4-p6m0xK1AAZYkjPU",
    "https://www.linkedin.com/posts/sapreet-gujjar-669297211_ai-autvizsolutions-smartwhatsapp-activity-7290678977264857088-6PXn/?rcm=ACoAADWc8_EBu_pwNKtt5d4-p6m0xK1AAZYkjPU",
    "https://www.linkedin.com/posts/sapreet-gujjar-669297211_ai-futuretech-automation-activity-7289533790446592001-vkFf/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFjR1I8BFUl8uDsfJ-V_JoGzo7dmnme_IOw"
];

const commentText = "Great Understanding AI agents'";

async function autoComment() {
    console.log("🔵 LinkedIn Auto Commenter Running...");

    let postLinks = Array.from(document.querySelectorAll('a'))
        .map(a => a.href)
        .filter(link => link.includes('/posts/') && link.includes('activity'));

    // Add predefined static post links if they're not already included
    staticPostLinks.forEach(link => {
        if (!postLinks.includes(link)) {
            postLinks.push(link);
        }
    });

    postLinks = await fetchMorePosts(postLinks); // Fetch additional posts

    chrome.storage.local.set({ "postUrls": postLinks.slice(0, maxPosts), "commentText": commentText, "isRunning": true }, () => {
        window.location.href = postLinks[0]; // Open first post
    });
}

// Function to fetch more posts dynamically
async function fetchMorePosts(existingPosts) {
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise(r => setTimeout(r, 3000));

    let newPosts = Array.from(document.querySelectorAll('a'))
        .map(a => a.href)
        .filter(link => link.includes('/posts/') && link.includes('activity'));

    return [...new Set([...existingPosts, ...newPosts])]; // Remove duplicates
}

autoComment();
