

var part1 = "eyJ0eXAiOiJKV1QiLCJub25jZSI6IkM0dzl1X3pDWDdhRHFyU2UybURTYU9OeGgtQ0R0OWdQV3AySWV4WU1DQW8iLCJhbGciOiJSUzI1NiIsIng1dCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSIsImtpZCI6IkpETmFfNGk0cjdGZ2lnTDNzSElsSTN4Vi1JVSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kMWQzNDI2Mi00MDIwLTQwZTAtOTlmNy03NjRlOGU4MDgyYjcvIiwiaWF0IjoxNzQyMzY3NTA1LCJuYmYiOjE3NDIzNjc1MDUsImV4cCI6MTc0MjQ1NDIwNSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhaQUFBQUpkVEN0QjhqQ090cVJJUXR3NmlxdWtCTGtkVWhOUlBMWWhYV1IxRmJiZ3lFc05CM241VC8wbUQzWmlCek1ESXFRMkQwSHF2MmdQTjJoMC9tTXdnZWh3PT0iLCJhbXIiOlsicHdkIl0sImFwc";
var part2 = "F9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlNpbmdoIiwiZ2l2ZW5fbmFtZSI6IlNhcHJlZXQiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxMTAuMjI3LjE4OC42MCIsIm5hbWUiOiJTYXByZWV0IFNpbmdoIiwib2lkIjoiNzQyYjE3MTUtODk5Mi00ZjU3LTg0MjgtOTNjNzFlNTlmMDE3IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAzNERCNUM3MTQiLCJyaCI6IjEuQVNzQVlrTFQwU0JBNEVDWjkzWk9qb0NDdHdNQUFBQUFBQUFBd0FBQUFBQUFBQURDQUxnckFBLiIsInNjcCI6IkJyb3dzZXJTaXRlTGlzdHMuUmVhZC5BbGwgQnJvd3NlclNpdGVMaXN0cy5SZWFkV3JpdGUuQWxsIENoYW5uZWwuUmVhZEJhc2ljLkFsbCBDaGF0LlJlYWQgQ2hhdC5SZWFkQmFzaWMgQ2hhdC5SZWFkV3";
var part3 = "JpdGUgQ2hhdE1lc3NhZ2UuUmVhZCBDb250YWN0cy5SZWFkIEZpbGVzLlJlYWQgRmlsZXMuUmVhZC5BbGwgRmlsZXMuUmVhZFdyaXRlIE1haWwuUmVhZCBNYWlsLlJlYWRCYXNpYyBNYWlsYm94U2V0dGluZ3MuUmVhZCBvcGVuaWQgUGVvcGxlLlJlYWQgcHJvZmlsZSBTaXRlcy5SZWFkLkFsbCBTaXRlcy5SZWFkV3JpdGUuQWxsIFRhc2tzLlJlYWQgVGFza3MuUmVhZFdyaXRlIFRlYW0uUmVhZEJhc2ljLkFsbCBUZWFtc0FwcEluc3RhbGxhdGlvbi5SZWFkRm9yQ2hhdCBUZWFtc0FwcEluc3RhbGxhdGlvbi5SZWFkRm9yVXNlciBVc2VyLlJlYWQgVXNlci5SZWFkQmFzaWMuQWxsIFVzZXIuUmVhZFdyaXRlIFVzZXJBY3Rpdml0eS5SZWFkV3JpdGUuQ3JlYXRlZEJ5QXBwIGVtYWlsIiwic";
var part4 = "2lkIjoiMDAzMGI0ZDktZTc1MS1jZTNmLTZjYjAtNWEwZDc5MGU3YjkwIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoibUE1bE1XQzNvdXZoNm10ZGY0b2xtNkhDNHF3NkxYdnBSZE9BQ2tlU0dUUSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJBUyIsInRpZCI6ImQxZDM0MjYyLTQwMjAtNDBlMC05OWY3LTc2NGU4ZTgwODJiNyIsInVuaXF1ZV9uYW1lIjoiU2FwcmVldC5TaW5naEBhdXR2aXouaW4iLCJ1cG4iOiJTYXByZWV0LlNpbmdoQGF1dHZpei5pbiIsInV0aSI6ImxSWm9IWUYyVGstblVLcF83VmM0QUEiLCJ2ZXIiOiIxL";
var part5 = "jAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfY2MiOlsiQ1AxIl0sInhtc19mdGQiOiJXOHNMY0IyMU5yb2JTRmhSMFlXN2x6MzZhTy1XZXdwellnV2w0c0JVcHpjIiwieG1zX2lkcmVsIjoiMSAxMCIsInhtc19zc20iOiIxIiwieG1zX3N0Ijp7InN1YiI6ImVzbjNOM1hMb2s1ZHlvUjhyTkp1T0NhTHlIR2hlcHNvclhRUTJubjJsRHMifSwieG1zX3RjZHQiOjE3MDE0MzEwNTF9.EyKqpNCewPgxNa7Uq37xLQLYle4pRHOZc8uX4DXoKt3lrUWT_lfuWivSSlBbqj5R";
var part6 = "PBywgiX_a-ST2AV0wIbm91O3ZMe7c17EVWdh32XDrFPr_szwcC0tNmBkg_w1WhlKILKboBFiE0fbIhyUJeA9Cl7YR8yfTkP1qS6mbyb5gIrRca0MS1OKrAhU9RyR4KFCGVHfzvC-jz3wPx5aoQhHuCWwupfa1QscQGNrYpWwY1wI0uO-aR";
var part7 = "FKzlgwdpZR58jVhJ1HjCPakrO0rN0GtjT5c0Obo2YuNVr9X4-ZiqSyldiDhP7ebBC01sDbE8n4Mi5PyFf1VKCosRbS5YiY8eABIw";

var accessToken = part1 + part2 + part3 + part4 + part5 + part6 + part7;
var driveItemId = "01MIEJ6MFZL2K2XWBY7BB2AGZI4SQ7JTMS";
var worksheetName = "Post%20Details";
var rangeAddress = "A1:D10";
var maxPosts = 6;
var postLinksArray = [];

async function fetchPostLinks() {
    console.log("🔵 API Running...");

    const url = `https://graph.microsoft.com/v1.0/me/drive/items/${driveItemId}/workbook/worksheets/${worksheetName}/range(${rangeAddress})?$select=values`;

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
            console.log("No valid data or only header row found in Excel.");
            return [];
        }

        const headers = data.values[0];
        let postLinks = data.values.slice(1).map(row => {
            return headers.reduce((acc, header, index) => {
                acc[header] = row[index] || "";
                return acc;
            }, {});
        });

        console.log("Fetched Post Links:", postLinks);
        postLinks = postLinks.filter((item)=>item.Status!=='done')
        postLinks.forEach((item) => postLinksArray.push({url: item?.["Post Url"],comment:item?.['Post comment']}))
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






