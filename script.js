let countEl = document.getElementById("count-el");
let previousEntries = document.getElementById("previous-entries");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let newStr = count + " - ";

  previousEntries.textContent += newStr;
  count = 0;
  countEl.textContent = 0;
}
