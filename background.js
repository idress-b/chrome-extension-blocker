urlList = ["https://www.youtube.com"];

function urlIsMatching(urlToCheck) {
    return urlList.some((elt) => urlToCheck.includes(elt));
}


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log("tab url updated", tab.url);
        if (urlIsMatching(tab.url)) {
            console.log("URL matched, hiding page");
        chrome.scripting.insertCSS({
            target:  {
                tabId: tab.id,
              },
            css: `body { display: none; }`
        });
        
    }
    }); 