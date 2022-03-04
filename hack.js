//adding easy and hard button
let easy = document.getElementById("easy");
let hard = document.getElementById("hard");
let num = 6;


//changing all colors
const change = (color) => {
    squares.forEach((sq) => {
        sq.style.backgroundColor = color;
    })
}



//generating random numbers
const generating = () => {
    let r1 = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let r3 = Math.floor(Math.random() * 256);
    return `rgb(${r1}, ${r2}, ${r3})`;
}



//generating array of random rgb numbers
const rand = (n) => {
    let col = [];
    for (let i = 0; i < n; i++) {
        col.push(generating());
    }
    return col;
}



let colors = rand(num);
let squares = document.querySelectorAll(".square");


//heading rgb number
const win = () => {
    r = Math.floor(Math.random() * colors.length);
    return colors[r];
}
let wincolor = win();
rgbno.textContent = wincolor;






let c1 = num;
let c2 = 0;
let probabilty = document.getElementById("probability");
for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        let choosencolor = this.style.backgroundColor;

        if (choosencolor == wincolor) {
            change(wincolor);
            result.textContent = "CORRECT";
            reset.textContent = "Play Again!!";
            white.style.backgroundColor = wincolor;
            probabilty.textContent = `succeeded in ${c2+1} attempt`;
            c2 = 0;
        } else {
            result.textContent = "Try Again!!!"
            this.style.backgroundColor = "black";
            c2 = c2 + 1;
            probabilty.textContent = `no. of attempts failed : ${c2}`;
        }
    })
};


//adding reset button
let reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    colors = rand(num);
    wincolor = win();
    rgbno.textContent = wincolor;
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    this.textContent = "New Game";
    white.style.backgroundColor = `rgb(${255}, ${190}, ${70})`;
    result.textContent = "";
    probabilty.textContent = "";
});




//adding easy and hard button
easy.addEventListener("click", function() {
    this.classList.add("selected");
    hard.classList.remove("selected");
    num = 3;
    colors = rand(num);
    wincolor = win();
    rgbno.textContent = wincolor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
})
hard.addEventListener("click", function() {
    this.classList.add("selected");
    easy.classList.remove("selected");
    num = 6;
    colors = rand(num);
    wincolor = win();
    rgbno.textContent = wincolor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})