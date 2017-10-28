
browser.browserAction.onClicked.addListener((request, sender, sendResponse) => {
    browser.tabs.executeScript({file: "js/content.js"});
});

browser.commands.onCommand.addListener((command) => {
    if (command === "parent-folder") {
        browser.tabs.executeScript({file: "js/content.js"});
    }
});

