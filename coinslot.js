let fortune = [
   "a",
   "b",
   "c"
];

let clicked = () => {
   let randomFortune = fortune[Math.floor(Math.random() * fortune.length)];
   return message.innerText = randomFortune;
}

let coinSlot = document.getElementById("coinSlot")
coinSlot.addEventListener("click", clicked)

let message = document.getElementById("message");

