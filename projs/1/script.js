const alphabet = "abcdefghijklmnopqrstuvwxyz";
const base = alphabet.length;

/* КРУТИЛКА */
let SPEED = 0; // ms

function increment(word) {
  let arr = word.split("");
  let i = arr.length - 1;

  while (i >= 0) {
    let pos = alphabet.indexOf(arr[i]);
    if (pos + 1 < base) {
      arr[i] = alphabet[pos + 1];
      return arr.join("");
    } else {
      arr[i] = alphabet[0];
      i--;
    }
  }
  return arr.join("");
}

document.querySelectorAll(".babel").forEach(el => {
  const original = el.textContent;
  let current = original;
  let interval = null;

  el.addEventListener("mouseenter", () => {
    if (interval) return;

    interval = setInterval(() => {
      current = increment(current);
      el.textContent = current;
    }, SPEED);
  });

  el.addEventListener("mouseleave", () => {
    clearInterval(interval);
    interval = null;
    current = original;
    el.textContent = original;
  });
});
