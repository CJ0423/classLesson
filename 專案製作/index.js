function getDom(dom) {
    return document.querySelector(dom);
}

let hamburger = getDom(".hamburger");
let navBarJoin = getDom(".nav-bar-join");
let main = getDom(".main");
let formContentBoss = getDom(".form-content-boss");
let navBarMemberJoin = getDom(".nav-bar-member-join");
let clickMenu = document.querySelectorAll(".click-menu");
let memberJoin = getDom("#member-join");
let xMark = getDom(".x-mark");

hamburger.addEventListener("click", function () {
    console.log(this);
    navBarJoin.classList.toggle("show");
})

hamburger.addEventListener("click", function () {
    if (navBarJoin.style.display == "flex") {
        navBarJoin.style.display = "none";
    }
})

// clickMenu.addEventListener("click", function (e) {

//     navBarJoin.classList.removed("show");
// })



navBarMemberJoin.addEventListener("click", function (e) {
    e.preventDefault();
    if (formContentBoss.style.display == "flex") {
        formContentBoss.style.display = "none"
    } else {
        formContentBoss.style.display = "flex";
    }

})

for (i = 0; i < clickMenu.length; i++) {
    clickMenu[i].addEventListener("click", function (e) {
        e.preventDefault();
        console.log(clickMenu);
        console.log(this);
        navBarJoin.classList.toggle('show');
    })
}

xMark.addEventListener("click", function () {
    formContentBoss.style.display = "none";
})
// clickMenu.addEventListener("clcik", function () {
//     e.preventDefault();
//     if (navBarJoin.style.display == "flex") {
//         navBarJoin.style.display = "none"
//     } else {
//         navBarJoin.style.display = "flex";
//     }
// })


// background-color: rgba(255, 0, 0, 0.5);