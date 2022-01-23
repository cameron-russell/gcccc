console.log("background script loaded.");

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.tabs.onActivated.addListener(async ({ tabId, windowId }) => {
  const curTab = await getCurrentTab();
  if (/https?:\/\/github\.com\/([A-z0-9])+\/?/i.test(curTab.url)) {
    run(tabId);
  }
});

//content script sends a message when page is refreshed
chrome.runtime.onMessage.addListener((message, sender, res) => {
  console.log("refreshed, getting current tab");
  getCurrentTab().then((tab_info) => {
    console.log(tab_info);
    run(tab_info.id);
  });
});

function run(id) {
  chrome.scripting.executeScript(
    { target: { tabId: id }, files: ["./foreground.js"] },
    () => console.log("script callback")
  );
}
