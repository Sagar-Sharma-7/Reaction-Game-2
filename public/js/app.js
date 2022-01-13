score_div = document.querySelector(".score");
banner = document.querySelector(".banner");
info = document.querySelector(".info");
restart = document.querySelector(".restart"); 
boxes = document.querySelectorAll(".box");

// text content
score_div.textContent = "Reaction Game";
info.textContent = "Click on the Coloured box to start the time.";


// colors
const colors = [" #4C8BF5", "#FF781F", "#FFFE67", "#FE68C3", "#9B6DFF"];

let index = [];
while(index.length < 5){
    let x = Math.floor(Math.random()* 16);
    if (index.indexOf(x) == -1) index.push(x);
    console.log(index);
};

// styling on Click
const editBox = (n) => {
    boxes[index[n]].style.backgroundColor = `#262626`;
    boxes[index[n]].disabled = true;
}


info.addEventListener("click", () => {
    const startTime = new Date().getTime();
    info.disabled = true;
    boxes[index[0]].style.backgroundColor = `${colors[0]}`;
    boxes[index[0]].addEventListener("click", () => {
        editBox(0);
        boxes[index[1]].style.backgroundColor = `${colors[1]}`;
        boxes[index[1]].addEventListener("click", () => {
            editBox(1);
            boxes[index[2]].style.backgroundColor = `${colors[2]}`;
            boxes[index[2]].addEventListener("click", () => {
                editBox(2);
                boxes[index[3]].style.backgroundColor = `${colors[3]}`;
                boxes[index[3]].addEventListener("click", () => {
                    editBox(3);
                    boxes[index[4]].style.backgroundColor = `${colors[4]}`;
                    boxes[index[4]].addEventListener("click", () => {
                        const finshTime = new Date().getTime();
                        editBox(4);
                        alert((finshTime - startTime)/5);
                    })
                })
            })
        });
    });
});




