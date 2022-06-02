//Generate the Variable
var WH = window.innerHeight;
var WW = window.innerWidth;
var move = true;
var situation = "start_screen";
var point = 0;
var hammerPos = {
    x: 0,
    y: 0
}

//難度
var goal = 3;
var mode = 1000;


// Get the Element
var title = document.getElementById("title");
var btn = document.getElementById("btn");
var player = document.getElementById("player");
var hammer = document.getElementById("hammer");
var pointscr = document.getElementById("point");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
// Hide the title and button

btn.addEventListener("click", () => {
    situation = "game_start";
})

// hammer position


window.addEventListener("mousemove", (e) => {
    hammerPos.x = e.x;
    hammerPos.y = e.y;
})

window.addEventListener("click", () => {
    if (situation == "game_start") {
        var change = setTimeout(() => {
            hammer.src = "./hammer.png";
            BoxCollider();
            clearTimeout(change);
            move = true;
        }, 300);
        move = false;
        hammer.src = "./hammer2.jpg";
    }
})

// window resize
window.addEventListener("resize", () => {
    WH = window.innerHeight;
    WW = window.innerWidth;
})


btn1.addEventListener("click", () => {
    btn1.style.backgroundColor = "red";
    btn2.style.backgroundColor = "lightgray";
    btn3.style.backgroundColor = "lightgray";
    goal = 3;
    mode = 1500;
})
btn2.addEventListener("click", () => {
    btn1.style.backgroundColor = "lightgray";
    btn2.style.backgroundColor = "red";
    btn3.style.backgroundColor = "lightgray";
    goal = 5;
    mode = 1000;
})
btn3.addEventListener("click", () => {
    btn1.style.backgroundColor = "lightgray";
    btn2.style.backgroundColor = "lightgray";
    btn3.style.backgroundColor = "red";
    goal = 10;
    mode = 500;
})
//function

function getRandomNumber() {
    var number = 1 + Math.round(Math.random() * 95);
    return number;
}
var game = setInterval(() => {
    if (situation == "game_start") {
        player.style.top = getRandomNumber() + "%";
        player.style.left = getRandomNumber() + "%";
    }

}, mode)

function BoxCollider() {
    if (Math.abs(hammerPos.x - parseInt(player.style.left) / 100 * WW) <= 50 && Math.abs(hammerPos.y - parseInt(player.style.top) / 100 * WH) <= 50) {
        point++;
        pointscr.textContent = `Point : ${point}`
        setTimeout(() => {
            player.style.backgroundColor = "red";
        }, 1000)
        player.style.backgroundColor = "yellow";
    }

    if (point >= goal) {
        situation = "win";
    }
}

// 迴圈




var game2 = setInterval(() => {
    if (move) {
        hammer.style.top = hammerPos.y - 50 + "px";
        hammer.style.left = hammerPos.x - 50 + "px";
    }
}, 1);
setInterval(() => {
    if (situation == "game_start") {
        title.style.display = "none";
        btn.style.display = "none";
        player.style.display = "block";
        hammer.style.display = "block";
        document.querySelector("div").style.display = "none";

    }
    if (situation == "win") {
        title.textContent = "You Win !"
        title.style.display = "block";
        btn.style.display = "none";
        player.style.display = "none";
        hammer.style.display = "none";
    }
})


//忘記去邊...