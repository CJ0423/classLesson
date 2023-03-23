function getDom(dom) {
    return document.querySelector(dom)
}

let x = getDom("#x")
let three = getDom("#three")

x.addEventListener("click", function () {
    document.querySelector("#menu").style.display = "none";
    document.querySelector("#start").style.display = "flex";
})
three.addEventListener("click", function () {
    document.querySelector("#menu").style.display = "flex";
    document.querySelector("#start").style.display = "none";
})