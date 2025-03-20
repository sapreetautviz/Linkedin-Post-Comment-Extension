var maxPosts = 10;
var postLinksArray = [];
async function fetchPostLinks() {
    console.log("🔵 API Running...");

    const url = `https://30lss7df-7077.inc1.devtunnels.ms/api/LinkedinAutomation/GetPost`;
      
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
            console.log("No valid data found.");
            return [];
        }

        // Filter and map results
        const postLinks = data
            .filter(item => item.status !== 'done')
            .map(item => ({
                url: item.postUrl,
                comment: item.postcomment
            }));

        console.log("Total URLs:", postLinks);
        postLinks.forEach((item) => postLinksArray.push({url: item?.url,comment:item?.comment}))
        console.log("postData",postLinksArray)

        return postLinks;
    } catch (error) {
        console.error("Failed to fetch Excel data:", error);
        return [];
    }
}


async function autoComment() {

    await fetchPostLinks();
    if (postLinksArray.length === 0) {
        alert("No post links available. Stopping execution.");
        try {
            chrome.storage.local.set({ isRunning: false });
        } catch (error) {
            console.error(error);
        }
        return;
    }

    console.log("🔵 LinkedIn Auto Commenter Running...");

    let postLinks = Array.from(document.querySelectorAll('a'))
        .map(a => a.href)
        .filter(link => link.includes('/posts/') && link.includes('activity'));

    // Add predefined static post links if they're not already included
    postLinksArray.forEach(link => {
        if (!postLinks.includes(link)) {
            postLinks.push(link);
        }
    });

     try {
        chrome.storage.local.set({ "postUrls": postLinks.slice(0, maxPosts), "isRunning": true }, () => {
         window.location.href = postLinks[0].url; // Open first post
        });
     } catch (error) {
        console.log(error)
     }

}

autoComment();






