document.addEventListener("DOMContentLoaded", () => {
  let time = Math.floor(Math.random() * 4000);
  setRandomTimeout(time);
});
let life = 3;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letterMap = {};
let intersectionObservation = new IntersectionObserver(observer);
function setRandomTimeout(time) {
  setTimeout(() => {
    let p = document.createElement("div");
    p.className = "b";
    let letter = "";
    do {
      letter = letters[Math.round(Math.random() * 25)];
    } while (letter in letterMap);
    letterMap[letter] = p;
    p.innerText = `${letter}`;
    p.style.animationDuration = 10 - Math.floor(s / 10) + "s";
    p.style.left = 100 + Math.random() * 1000 + "px";
    let x;
    do {
      x = Math.floor(Math.random() * 16777215).toString(16);
    } while (String(x) === "FFFFFF" && String(x) === "000000");

    p.style.backgroundColor = "#" + x;
    intersectionObservation.observe(p);
    document.body.append(p);
    setRandomTimeout(Math.max(500, Math.random() * 4000 - Math.floor(s / 20)));
  }, time);
}
let s = 0;

window.addEventListener("keydown", (event) => {
  if (event.key.toUpperCase() in letterMap) {
    s++;
    document.getElementById("score").innerText = s;
    intersectionObservation.unobserve(
      letterMap[String(event.key.toUpperCase())],
    );
    letterMap[String(event.key.toUpperCase())].remove();
    delete letterMap[String(event.key.toUpperCase())];
  } else {
    s -= 0.25;
    document.getElementById("score").innerText = s;
  }
});
function observer(entries) {
  let removals = entries.filter((entry) => !entry.isIntersecting);
  removals.forEach((letter) => {
    letter.target.remove();
    delete letterMap[letter.target.innerText];
  });
  if (!life) {
    Object.values(letterMap).forEach((letter) => {
      intersectionObservation.unobserve(letter);
    });
    alert(`Game Over. Your score was ${s}`);
    window.location.reload();
  } else {
    life -= removals.length;
    document.getElementById("lives").innerText = life;
  }
}
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
