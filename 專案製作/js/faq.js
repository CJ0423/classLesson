function getDom(dom) {
    return document.querySelector(dom);
}

let hamburger = getDom(".hamburger");
let navBarJoin = getDom(".nav-bar-join");
let questionsAll = document.querySelectorAll(".questions-all");
let qa = document.querySelectorAll(".qa");
hamburger.addEventListener("click", function () {
    console.log(this);
    navBarJoin.classList.toggle("show");
})

hamburger.addEventListener("click", function () {
    if (navBarJoin.style.display == "flex") {
        navBarJoin.style.display = "none";
    }
})

for (let i = 0; i < questionsAll.length; i++) {
    questionsAll[i].addEventListener("click", function () {
        console.log(this)
        if (qa[i].style.display == "flex") {
            qa[i].style.display = "none";
            questionsAll[i].style.backgroundImage = 'url("../img/plus-solid.svg")';
        } else {
            questionsAll[i].style.marginBottom = "0";
            questionsAll[i].style.backgroundImage = 'url("../img/minus-solid.svg")';
            qa[i].style.display = "flex";
        }
    })
}

// window-minimize-solid.svg