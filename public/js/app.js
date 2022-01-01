score_div = document.querySelector(".score");
banner = document.querySelector(".banner");
info = document.querySelector(".info");
restart = document.querySelector(".restart"); 
boxes = document.querySelectorAll(".box");

// text content
score_div.textContent = "Reaction Game";
info.textContent = "Click on the Coloured box to start the time.";

// coloured box
first_box = Math.floor(Math.random() * 16);
boxes[first_box].style.backgroundColor = `rgb(48, 250, 48)`;

// colors
const colors = [" #4C8BF5", "#FF781F", "#FFFE67", "#FE68C3", "#9B6DFF"];
let num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


// box function
const editBox = (x) => {
    boxes[x].style.backgroundColor = `#262626`;
    boxes[x].disabled = true;
    // num.splice(x, 1);
    num.filter((value,index,arr) => {return value != x});
    console.log(num);
};

// start game
boxes[first_box].addEventListener("click", () => {
    const startTime = new Date().getTime();
    editBox(first_box);
    const b1 = num[Math.floor(Math.random() * num.length)];
    console.log(b1);
    boxes[num[b1]].style.backgroundColor = `${colors[0]}`;
    boxes[num[b1]].addEventListener("click", () => {
        console.log(b1);
        editBox(b1);
    })
});