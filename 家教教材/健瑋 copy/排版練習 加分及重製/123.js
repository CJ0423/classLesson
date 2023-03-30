

let point10 = document.querySelector("#point10Pic");
let point20 = document.querySelector("#point20Pic");
let point30 = document.querySelector("#point30Pic");
let score = document.querySelector("#score");
let whosWinner = document.querySelector("#whosWinner");
let num = 0

point30.addEventListener("click", function () {
    num = 0;
    score.innerHTML = num;
    score.style.color = "white";
})

point10.addEventListener("click", point)

point20.addEventListener("click", point2)

function point() {
    num += 10;
    score.innerHTML = num;
    if (num >= 100) {
        score.innerHTML = 100;
        score.style.color = "red";
    }
}
function point2() {
    num += 20;
    score.innerHTML = num;
    if (num >= 100) {
        score.innerHTML = 100;
        score.style.color = "red";
    }
}
