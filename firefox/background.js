console.log("background script loaded.");

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.tabs.onActivated.addListener(async ({ tabId, windowId }) => {
  const curTab = await getCurrentTab();
  if (isValidUrl(curTab.url)) {
    run(tabId);
  }
});

//content script sends a message when page is refreshed
chrome.runtime.onMessage.addListener(async ({ message }, sender, res) => {
  let { id } = await getCurrentTab();
  if (message?.type == "update") {
    console.log("update");
    console.log(message);
    updateVariable(message?.content, id);
  } else {
    console.log("refresh");
    run(id);
  }
});

function run(id) {
  chrome.scripting.executeScript(
    { target: { tabId: id }, files: ["./foreground.js"] }
    // () => console.log("script callback")
  );
  // addHalloweenColours(id);
}

function isValidUrl(url) {
  return /https?:\/\/github\.com\/([A-z0-9])+\/?/i.test(url);
}

function addHalloweenColours(id) {
  chrome.scripting.insertCSS({
    css: `html {
        --color-calendar-graph-day-L1-bg: #631c03 !important;
        --color-calendar-graph-day-L2-bg: #bd561d !important;
        --color-calendar-graph-day-L3-bg: #fa7a18 !important;
        --color-calendar-graph-day-L4-bg: #fddf68 !important;
      }`,
    target: { tabId: id },
  });
}

function updateVariable(variableString, id) {
  console.log("updating variable");
  chrome.scripting.insertCSS({
    css: `html {
        ${variableString}
      }`,
    target: { tabId: id },
  });
}
