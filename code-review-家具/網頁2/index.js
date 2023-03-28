let memberIn = document.querySelector("#memberIn")
let memberSign = document.querySelector("#memberSign")
let menu = document.querySelector("#menu")
let main = document.querySelector("#main")
let livingRoom = document.querySelector("#livingRoom")
let num = 0
memberIn.value = "會員登入";
memberSign.value = "註冊會員";

menu.addEventListener("click", function () {
    if (num == 0) {
        main.style.left = "0px";
        main.style.zIndex = 2;
        livingRoom.style.filter = "brightness(0.8)";
        livingRoom.style.opacity = "0.5";
        num = 1
    } else {
        main.style.left = "-250px";
        livingRoom.style.filter = "brightness(1)";
        livingRoom.style.opacity = "1";
        main.style.zIndex = 1;
        num = 0
    }
})
memberIn.addEventListener("click", function () {
    window.open("http://127.0.0.1:5500/member.html", "_blank");
})
