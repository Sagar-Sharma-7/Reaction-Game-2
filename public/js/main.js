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
boxes[first_box].style.backgroundColor = `rgb(48, 250, 48)`;

// colors
const colors = [" #4C8BF5", "#FF781F", "#FFFE67", "#FE68C3", "#9B6DFF"];
let num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// box function
const editBox = (x) => {
    boxes[x].style.backgroundColor = `#262626`;
    boxes[x].disabled = true;
    num = num.filter((value,index,arr) => {return value != x});
    console.log(num);
};

// start game
boxes[first_box].addEventListener("click", () => {
    const startTime = new Date().getTime();
    editBox(first_box);
    const b1 = num[Math.floor(Math.random() * num.length)];
    console.log(b1)
    boxes[num[b1]].style.backgroundColor = `${colors[0]}`;
    boxes[num[b1]].addEventListener("click", () => {
        editBox(b1);
        const b2 = num[Math.floor(Math.random() * num.length)];
        console.log(b2)
        boxes[num[b2]].style.backgroundColor = `${colors[1]}`;
        boxes[num[b2]].addEventListener("click", () => {
            editBox(b2);
            const b3 = num[Math.floor(Math.random() * num.length)];
            console.log(b3)
            boxes[num[b3]].style.backgroundColor = `${colors[2]}`;
            boxes[num[b3]].addEventListener("click", () => {
                editBox(b3);
                const b4 = num[Math.floor(Math.random() * num.length)];
                console.log(b4)
                boxes[num[b4]].style.backgroundColor = `${colors[3]}`;
                boxes[num[b4]].addEventListener("click", () => {
                    editBox(b4);
                    const b5 = num[Math.floor(Math.random() * num.length)];
                    console.log(b5)
                    boxes[num[b5]].style.backgroundColor = `${colors[4]}`;
                    boxes[num[b5]].addEventListener("click", () => {
                        const endTime = new Date().getTime();
                        console.log((endTime - startTime) /5);
                        editBox(b5);
                    })
                })
            })
        })
    })
});