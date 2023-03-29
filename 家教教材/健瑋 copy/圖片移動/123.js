let inner = document.querySelector(".inner");

let pic = [
    "./pic/bed.jpg",
    "./pic/bklight.jpg",
    "./pic/puppy.jpg",
    "./pic/wood.jpg",
]
let x = 1;
setInterval(function () {
    inner.style.backgroundImage = "url(" + pic[x] + ")";
    x += 1;
    if (x > 3) {
        x = 0;
    }
}, 5000)