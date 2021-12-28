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
const colors = [" #4C8BF5", "#FF781F", "#FFFE67", "#FE68C3", "#9B6DFF"];

// start game
boxes[first_box].addEventListener("click", () => {
    const startTime = new Date().getTime();
    const b1 = Math.floor(Math.random() * 16);
    boxes[b1].style.backgroundColor = `${colors[0]}`;
    boxes[first_box].style.background = `#262626`;
    boxes[b1].addEventListener("click", () => {
        boxes[b1].style.background = `#262626`;
        const b2 = Math.floor(Math.random() *16);
        boxes[b2].style.backgroundColor = `${colors[1]}`;
        boxes[b2].addEventListener("click", () => {
            boxes[b2].style.background = `#262626`;
            const b3 = Math.floor(Math.random() * 16);
            boxes[b3].style.backgroundColor = `${colors[2]}`;
            boxes[b3].addEventListener("click", () => {
                boxes[b3].style.background = `#262626`;
                const b4 = Math.floor(Math.random() * 16);
                boxes[b4].style.backgroundColor = `${colors[3]}`;
                boxes[b4].addEventListener("click", () => {
                    boxes[b4].style.background = `#262626`;
                    const b5 = Math.floor(Math.random() * 16);
                    boxes[b5].style.backgroundColor = `${colors[4]}`;
                    boxes[b5].addEventListener("click", () =>{
                        const endTime = new Date().getTime();
                        boxes[b5].style.backgroundColor = `#262626`;
                        console.log((endTime - startTime)/5);
                    })
                })
            });
        });
    });
});