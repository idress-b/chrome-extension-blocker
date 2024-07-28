urlList = ["https://www.youtube.com/shorts"];

function urlIsMatching(urlToCheck) {
    return urlList.some((elt) => urlToCheck.includes(elt));
}


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log("tab url updated", tab.url);
        if (urlIsMatching(tab.url)) {
            console.log("URL matched, hiding page");
        chrome.scripting.executeScript({
            target:  {
                tabId: tab.id,
              },
            func: () => {
                document.body.innerHTML = "<h1>Shorts are bad !! Je t'avais dit quoi ZEyd!!</h1>";
            }
        });
        
    }
    }); 