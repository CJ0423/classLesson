let inner = document.querySelector(".inner");

let pic = [
    "./pic/bed.jpg",
    "./pic/bklight.jpg",
    "./pic/puppy.jpg",
    "./pic/wood.jpg",
]
let x = 0;
setInterval(function () {
    console.log(`現在是第${x}張圖片`)//給可用來測試的喔
    inner.style.backgroundImage = "url(" + pic[x] + ")";
    x += 1;
  
    if (x > 3) {
        x = 0;
    }
}, 5000)