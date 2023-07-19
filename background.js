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

function sendResponse() {
  console.log("Response sent.");
}

// Allow this background script to receive
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) =>
  console.log("message", msg)
);
