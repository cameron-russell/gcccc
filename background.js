console.log("from background");
chrome.tabs.onActivated.addListener((tab) =>
  chrome.tabs.executeScript(null, { file: "./foreground.js" }, () =>
    console.log("after activated")
  )
);

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(changeInfo);
  if (changeInfo.url === undefined) {
    chrome.tabs.executeScript(null, { file: "./foreground.js" }, () =>
      console.log("after refresh")
    );
  }
});
