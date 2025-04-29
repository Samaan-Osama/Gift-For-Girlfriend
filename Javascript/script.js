let button02 = document.querySelector("#button02");
let body = document.querySelector("body");
let button01 = document.querySelector("#button01");
button01.addEventListener("click", () => {
  window.location.href = "congrats.html";
});
button02.addEventListener("mouseover", () => {
  let randomValue01 = Math.floor(Math.random() * innerHeight);
  let randomValue02 = Math.floor(Math.random() * innerWidth);
  while (randomValue01 < 100 || randomValue01 > 580) {
    randomValue01 = Math.floor(Math.random() * innerHeight);
  }
  while (randomValue02 > 1100 || randomValue02 < 100) {
    randomValue02 = Math.floor(Math.random() * innerWidth);
  }
  button02.style.position = "absolute";
  button02.style.top = randomValue01 + "px";
  button02.style.left = randomValue02 + "px";
});
