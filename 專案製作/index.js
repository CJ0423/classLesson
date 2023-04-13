function getDom(dom) {
    return document.querySelector(dom);
}

let hamburger = getDom(".hamburger");
let navBarJoin = getDom(".nav-bar-join");
hamburger.addEventListener("click", function () {
    console.log(this);
    navBarJoin.classList.toggle("show");
})

// hamburger.addEventListener("click", function () {
//     if (navBarJoin.style.display == "flex") {
//         navBarJoin.style.display = "none";
//     }
// })