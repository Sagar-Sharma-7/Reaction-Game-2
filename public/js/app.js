score_div = document.querySelector(".score");
banner = document.querySelector(".banner");
info = document.querySelector(".info");
restart = document.querySelector(".restart"); 
boxes = document.querySelectorAll(".box");

// text content
score_div.textContent = "Reaction Game";
info.textContent = "Click me to start the game.";


// colors
const colors = [" #4C8BF5", "#FF781F", "#FFFE67", "#FE68C3", "#9B6DFF"];

let in_dex = [];
while(in_dex.length < 5){
    let x = Math.floor(Math.random()* 16);
    if (in_dex.indexOf(x) == -1) in_dex.push(x);
    console.log(in_dex);
};



// styling on Click
const editBox = (n) => {
    boxes[in_dex[n]].style.backgroundColor = `#262626`;
    boxes[in_dex[n]].disabled = true;
}



info.addEventListener("click", () => {
    const startTime = new Date().getTime();
    let i;
    for(i = 0; i <=15; i++){
        boxes[i].disabled = false;
    };
    banner.style.backgroundColor = `#262626`;
    info.style.color = `#ffffff`;
    info.textContent = 'Click on the coloured box as fast as you can.'
    boxes[in_dex[0]].style.backgroundColor = `${colors[0]}`;
    boxes[in_dex[0]].addEventListener("click", () => {
        editBox(0);
        boxes[in_dex[1]].style.backgroundColor = `${colors[1]}`;
        boxes[in_dex[1]].addEventListener("click", () => {
            editBox(1);
            boxes[in_dex[2]].style.backgroundColor = `${colors[2]}`;
            boxes[in_dex[2]].addEventListener("click", () => {
                editBox(2);
                boxes[in_dex[3]].style.backgroundColor = `${colors[3]}`;
                boxes[in_dex[3]].addEventListener("click", () => {
                    editBox(3);
                    boxes[in_dex[4]].style.backgroundColor = `${colors[4]}`;
                    boxes[in_dex[4]].addEventListener("click", () => {
                        const finshTime = new Date().getTime();
                        editBox(4);
                        score_div.innerHTML = `${(finshTime - startTime)/5000} seconds`;
                        banner.style.backgroundColor = `rgb(48, 250, 48)`;
                        info.style.display = "none";
                        restart.style.display = 'block';
                        let a = 0;
                        while (a < 5){
                            in_dex.pop();
                            console.log(in_dex);
                            a += 1
                        };
                        
                    });
                });
            });
        });
    });
});

// restart button
restart.addEventListener("click", () => {
    location.reload();
});




