alert("Extension");
console.log("Extension");

let links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  let title = links[i].text;
  console.log(title);
}
