console.log("from background");

// async function getCurrentTab() {
//   let queryOptions = { active: true, currentWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// }

chrome.tabs.onActivated.addListener((tab_info) => {
  console.log(tab_info);
  run(tab_info);
});

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   console.log(changeInfo);
//   if (changeInfo.url === undefined) {
//     chrome.tabs.executeScript(null, { file: "./foreground.js" }, () =>
//       console.log("after refresh")
//     );
//   }
// });

//check if page refreshed
chrome.runtime.onMessage.addListener((message, sender, res) => {
  console.log(message);
  run(tab_info);
});

function run(tab_info) {
  chrome.scripting.executeScript(
    { target: { tabId: tab_info.tabId }, files: ["./foreground.js"] },
    () => console.log("after activated")
  );
}
