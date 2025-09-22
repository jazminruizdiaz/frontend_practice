const display = document.getElementById("counterDisplay");
const button = document.getElementById("counterButton");

let count = 0;

function updateDisplay() {
  count = count + 1;
  display.textContent = count;
}

button.addEventListener("click", updateDisplay);
