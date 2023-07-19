alert("Extension");
console.log("Extension");

let links = document.getElementsByTagName("a");
let formatted_links = [];

for (let i = 0; i < links.length; i++) {
  let title = links[i].text;
  let href = links[i].href;

  if (!title && !href) {
    formatted_links.push({ title, href });
  }
}
console.log(formatted_links);

// Send links to background script
// Chrome runtime API
chrome.runtime.sendMessage(
  { action: "print_messages", data: formatted_links },
  (res) => console.log(res)
);
