// Combine the access token parts
const part1 = "eyJ0eXAiOiJKV1QiLCJub25jZSI6ImY3NlhYQjMtWFVNN0Nzb3Jfb05yNUpKTFB2R0w0cU1pV1BaMF9uZ1F4NzQiLCJhbGciOiJSUzI1NiIsIng1dCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSIsImtpZCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kMWQzNDI2Mi00MDIwLTQwZTAtOTlmNy03NjRlOGU4MDgyYjcvIiwiaWF0IjoxNzQyMzA1NDc3LCJuYmYiOjE3NDIzMDU0NzcsImV4cCI6MTc0MjM5MjE3NywiYWNjdCI6MCwiYWNyIjoiMSIsImFjcnMiOlsicDEiXSwiYWlvIjoiQVdRQW0vOFpBQUFBSXBrY0t3VjZoWHFkWVdGcGNSSGVFb0cvWV";
const part2 = "FrVUVNMFU3UjlVQzBRT0FvQk1WcWZtQmlvenJveUhDNDZ6QkxqQ0VaV3hOZHBiMGtwcFdrNUpRYjByWW1zd1BWMDdUU1ErNWJKc1c0d29sam8vWTZuYjE1SmwvV2lOMGdaNCtHUWIiLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlNpbmdoIiwiZ2l2ZW5fbmFtZSI6IlNhcHJlZXQiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxMTAuMjI3LjE4OC42MCIsIm5hbWUiOiJTYXByZWV0IFNpbmdoIiwib2lkIjoiNzQyYjE3MTUtODk5Mi00ZjU3LTg0MjgtOTNjNzFlNTlmMDE3IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAzNERCNUM3MTQiL";
const part3 = "CJyaCI6IjEuQVNzQVlrTFQwU0JBNEVDWjkzWk9qb0NDdHdNQUFBQUFBQUFBd0FBQUFBQUFBQURDQUxnckFBLiIsInNjcCI6IkJyb3dzZXJTaXRlTGlzdHMuUmVhZC5BbGwgQnJvd3NlclNpdGVMaXN0cy5SZWFkV3JpdGUuQWxsIENoYW5uZWwuUmVhZEJhc2ljLkFsbCBDaGF0LlJlYWQgQ2hhdC5SZWFkQmFzaWMgQ2hhdC5SZWFkV3JpdGUgQ2hhdE1lc3NhZ2UuUmVhZCBDb250YWN0cy5SZWFkIEZpbGVzLlJlYWQgRmlsZXMuUmVhZC5BbGwgRmlsZXMuUmVhZFdyaXRlIE1haWwuUmVhZCBNYWlsLlJlYWRCYXNpYyBNYWlsYm94U2V0dGluZ3MuUmVhZCBvcGVuaWQgUGVvcGxlLlJlYWQgcHJvZmlsZSBTaXRlcy5SZWFkLkFsbCBTaXRlcy5SZWFkV3JpdGUuQWxsIFRhc2tzLlJlYWQgVGFza3MuUmVhZFdyaXRlIFRlYW0uUmVh";
const part4 = "ZEJhc2ljLkFsbCBUZWFtc0FwcEluc3RhbGxhdGlvbi5SZWFkRm9yQ2hhdCBUZWFtc0FwcEluc3RhbGxhdGlvbi5SZWFkRm9yVXNlciBVc2VyLlJlYWQgVXNlci5SZWFkQmFzaWMuQWxsIFVzZXIuUmVhZFdyaXRlIFVzZXJBY3Rpdml0eS5SZWFkV3JpdGUuQ3JlYXRlZEJ5QXBwIGVtYWlsIiwic2lkIjoiMDAyZmNhNzktMzQ3MC0zODI0LTMwM2QtNjQ1ZDVjZTAxMTc1Iiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoibUE1bE1XQzNvdXZoNm10ZGY0b2xtNkhDNHF3NkxYdnBSZE9BQ2tlU0dUUSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJBUyIsInRpZCI6ImQxZDM0MjYyLTQwMjAtNDBlMC05OWY3LTc2NGU4ZTgwODJiNyIsInVuaXF1ZV9uYW1lIjoiU2FwcmVldC5TaW5naEBhdXR2aXouaW4iLCJ1cG4iOiJT";
const part5 = "YXByZWV0LlNpbmdoQGF1dHZpei5pbiIsInV0aSI6IjRUNnJLbVVSbWtHUlBlNG5Mc1lDQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfY2MiOlsiQ1AxIl0sInhtc19mdGQiOiJBWENzbjg1YzJZeWpmeUt4WE5uSW9DLUpEaURTOE9tNDhjUTJtQkdkb3FvIiwieG1zX2lkcmVsIjoiMSAxMCIsInhtc19zc20iOiIxIiwieG1zX3N0I";
const part6 = "jp7InN1YiI6ImVzbjNOM1hMb2s1ZHlvUjhyTkp1T0NhTHlIR2hlcHNvclhRUTJubjJsRHMifSwieG1zX3RjZHQiOjE3MDE0MzEwNTF9.T7psz2K9j34VEUiToXo698FgyLpIelY5HIl_UHvHzloIgtCn_moqk8djgbFdevbhevQdJt8GXqRdVFO-8k6wir4Tz2wLYgV7FhMBP2j6-tD_FbkjlUyJ9aahnKK6vOOTrzf8-UjA7AzUEpyq_tCOTOVJ91lWZHQNG_0jIU5v79xXlbbAlpEVMpF0aLZx5Ntgvk"
const part7 = "JuzSpspgFUrapUl_r2ZI_jAc0A5pGUV_VLoh86vg7krGNWE4KT3ceTQ1u6F2106RW614G3XBni0E3U8qFPvatB9dApGUjBCivseafoiFNy2zRixnA1QtRWzLPiuUjnuOZiXAElgW8bJ3fRHULeJg"

const accessToken = part1 + part2 + part3 + part4 + part5 + part6 + part7;
const driveItemId = "01MIEJ6MFZL2K2XWBY7BB2AGZI4SQ7JTMS";
const worksheetName = "Post%20Details";
const rangeAddress = "A1:D6";
const maxPosts = 6;
const postLinksArray = [];

async function fetchPostLinks() {
    console.log("🔵 API Running...");

    const url = `https://graph.microsoft.com/v1.0/me/drive/items/${driveItemId}/workbook/worksheets/${worksheetName}/range(address='${rangeAddress}')?$select=values`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();

        if (!data.values || data.values.length <= 1) {
            console.warn("No valid data or only header row found in Excel.");
            return [];
        }

        const headers = data.values[0];
        const postLinks = data.values.slice(1).map(row => {
            return headers.reduce((acc, header, index) => {
                acc[header] = row[index] || "";
                return acc;
            }, {});
        });

        console.log("Fetched Post Links:", postLinks);

        postLinks.forEach((item) => postLinksArray.push({url: item?.["Post Url"],comment:item?.['Post comment']}))
        console.log("array", postLinksArray);

        return postLinks;
    } catch (error) {
        console.error("Failed to fetch Excel data:", error);
        return [];
    }
}


async function autoComment() {
    await fetchPostLinks();
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

   // postLinks = await fetchMorePosts(postLinks); // Fetch additional posts

    chrome.storage.local.set({ "postUrls": postLinks.slice(0, maxPosts), "commentText": commentText, "isRunning": true }, () => {
     alert(window.location.href = postLinks[0].url); // Open first post
    });
}

autoComment();


// Function to fetch more posts dynamically
// async function fetchMorePosts(existingPosts) {
//     window.scrollTo(0, document.body.scrollHeight);
//     await new Promise(r => setTimeout(r, 3000));

//     let newPosts = Array.from(document.querySelectorAll('a'))
//         .map(a => a.href)
//         .filter(link => link.includes('/posts/') && link.includes('activity'));

//     return [...new Set([...existingPosts, ...newPosts])]; // Remove duplicates
// }





