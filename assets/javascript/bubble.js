document.addEventListener("DOMContentLoaded", () => {
  alert(
    `ready for some fun??? \n🕹️🕹️👻👻👻\nCorrect Keystroke: +1.0\nIncorrect Keystroke: -0.25`,
  );
  let time = Math.floor(Math.random() * 4000);
  setRandomTimeout(time);
});
let life = 3;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letterMap = {};
let intersectionObservation = new IntersectionObserver(observer, {
  threshold: [0],
});
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
    p.style.animationDuration = Math.max(0.7, 10 - Math.floor(s / 5)) + "s";
    p.style.left = 100 + Math.random() * 1000 + "px";
    let x;
    do {
      x = Math.floor(Math.random() * 16777215).toString(16);
    } while (x.toUpperCase() === "FFFFFF" || x.toUpperCase() === "000000");

    p.style.backgroundColor = "#" + x;
    document.body.append(p);
    requestAnimationFrame(() => {
      intersectionObservation.observe(p);
    });
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
    if (s >= 10) {
      alert(
        `your score is ${s}, give $1000000 to Jay to get big score\n😌😌😌😌😌😌`,
      );
    } else {
      alert(
        `😿😿😿🥺🥺🥺\nawwww! game over \nand your score is ${s} \nPay $100 to Jay to get higher score💃💃💃💃`,
      );
    }

    window.location.reload();
  } else {
    life -= removals.length;
    document.getElementById("lives").innerText = life;
  }
}
function myFunction() {
  var element = document.body;
  element.classList.toggle("light-mode");
  if (document.body.className === "light-mode") {
    document.querySelector("button").innerText = `⏾`;
  } else {
    document.querySelector("button").innerText = `☀︎`;
  }
}
