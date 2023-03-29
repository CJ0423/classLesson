let inner = document.querySelector(".inner");

let pic = [
    "./pic/bed.jpg",
    "./pic/bklight.jpg",
    "./pic/puppy.jpg",
    "./pic/wood.jpg",
]
let x = -1;
setInterval(function () {
    x += 1;
    inner.style.backgroundImage = "url(" + pic[x] + ")";
    if (x > 3) {
        x = 0;
    }
}, 10000)