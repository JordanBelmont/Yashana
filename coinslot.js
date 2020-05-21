let fortune = [
   "a",
   "b",
   "c"
];

let randomFortune = fortune[Math.floor(Math.random() * fortune.length)];

let clicked = (e) => {
   console.log(randomFortune);
}

let coinSlot = document.getElementById("coinSlot").randomFortune;
coinSlot.addEventListener("click", clicked)