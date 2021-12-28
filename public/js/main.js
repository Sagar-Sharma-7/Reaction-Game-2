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

// start game
boxes[first_box].addEventListener("click", () => {
    const startTime = new Date().getTime();

    const b1 = num[Math.floor(Math.random() * 16)]
    num = num.filter((value,index,aarr) => {return value !=b1});
    boxes[b1].style.backgroundColor = `${colors[0]}`;
    boxes[first_box].style.background = `#262626`;
    boxes[first_box].disabled = true;
    boxes[b1].addEventListener("click", () => {
        const b2 = num[Math.floor(Math.random() * 15)];
        num = num.filter((value,index,aarr) => {return value !=b2});
        boxes[b2].style.backgroundColor = `${colors[1]}`;
        boxes[b1].style.background = `#262626`;
        boxes[b1].disabled = true;
        boxes[b2].addEventListener("click", () => {
            const b3 = num[Math.floor(Math.random() * 14)];
            num = num.filter((value,index,aarr) => {return value !=b3});
            boxes[b3].style.backgroundColor = `${colors[2]}`;
            boxes[b2].style.background = `#262626`;
            boxes[b2].disabled = true;
            boxes[b3].addEventListener("click", () => {
                const b4 = num[Math.floor(Math.random() * 13)];
                num = num.filter((value,index,aarr) => {return value !=b4});
                boxes[b4].style.backgroundColor = `${colors[3]}`;
                boxes[b3].style.background = `#262626`;
                boxes[b3].disabled = true;
                boxes[b4].addEventListener("click", () => {
                    const b5 = num[Math.floor(Math.random() * 12)];
                    num = num.filter((value,index,aarr) => {return value !=b5});
                    boxes[b5].style.backgroundColor = `${colors[4]}`;
                    boxes[b4].style.background = `#262626`;
                    boxes[b4].disabled = true;
                    boxes[b5].addEventListener("click", () => {
                        const endTime = new Date().getTime();
                        boxes[b5].style.backgroundColor = `#262626`;
                        alert((endTime - startTime)/5);
                    })
                })
            })
        });
    });


});