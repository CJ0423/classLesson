function getDom(dom) {
    return document.querySelector(dom);
}

let xMark = getDom(".x-mark");
let hamburger = getDom(".hamburger");
let waterAll = getDom(".water-all");

hamburger.addEventListener("click", function () {
    hamburger.style.display = "none";
    xMark.style.display = "flex";
    waterAll.style.display = "flex";
})

xMark.addEventListener("click", function () {
    hamburger.style.display = "flex";
    xMark.style.display = "none";
    waterAll.style.display = "none";
})