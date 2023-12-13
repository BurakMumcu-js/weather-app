chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "showWeatherPopup") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tab = tabs[0];
            chrome.windows.create({
                type: "popup",
                url: chrome.extension.getURL("popup.html"),
                width: 300,
                height: 400,
                top: tab.height,
                left: tab.width - 300
            });
        });
    }
});
