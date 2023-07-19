alert("Hi");

function myGenericClick(info, tab) {
  console.log("Clicked on page", info, tab);
}

function myImageClick(info, tab) {
  console.log("Clicked an image", info, tab);
}

chrome.contextMenus.create({
  title: "Share",
  onclick: myGenericClick,
  contexts: ["page"],
});

chrome.contextMenus.create({
  title: "Share Image",
  contexts: ["image"],
  onclick: myImageClick,
});

// Allow this background script to receive messages from index.js
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  console.log("request", req);
  console.log("sender", sender);
  sendResponse("<OK");
});
