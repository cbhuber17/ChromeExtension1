alert("Extension");
console.log("Extension");

let links = document.getElementsByTagName("a");
let formatted_links = [];

for (let i = 0; i < links.length; i++) {
  // Remove carriage returns and spaces
  let title = links[i].text.replace(/\s{2,10}/g, " ").trim();
  let href = links[i].href;

  if (title !== "" && href != "") {
    formatted_links.push({ title, href });
  }
}

// Send links to background script
// Chrome runtime API
chrome.runtime.sendMessage(formatted_links, function (response) {
  console.log(response);
});
