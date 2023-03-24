let touch = document.querySelector("#touch");
let box = document.querySelector("#box");
let num = 1
touch.addEventListener("click", function () {
    if (num == 1) {
        box.style.backgroundColor = "black";
        num = 0
    } else {
        box.style.backgroundColor = "red";
        num = 1
    }


})