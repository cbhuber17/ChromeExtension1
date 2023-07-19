alert("Hi");

function myGenericClick(info, tab) {
  console.log("Clicked on page", info, tab);
}

function myImageClick(info, tab) {
  console.log("Clicked an image", info, tab);
  chrome.windows.create({
    url: "https://www.facebook.com/sharer.php?u=" + info.srcUrl,
    type: "popup",
  });
}

// Right click added option
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
