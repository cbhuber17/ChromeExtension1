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
