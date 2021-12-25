score_div = document.querySelector(".score");
banner = document.querySelector(".banner");
info = document.querySelector(".info");
restart = document.querySelector(".restart"); 
boxes = document.querySelectorAll(".box");

// text content
score_div.textContent = "Reaction Game";
info.textContent = "Click on the Green box to start the time.";

// coloured box
first_box = Math.floor(Math.random() * 16);
console.log(first_box);
boxes[first_box].style.backgroundColor = `rgb(48, 250, 48)`;

// colors
const colors = [" #4C8BF5", "#FF781F"]
