
let img = document.querySelector(".img");
let mainAll = document.querySelector(".main-all");
let putHere = document.querySelector(".put-here");
let startX = mainAll.offsetLeft;
let startY = mainAll.offsetTop;
let win = document.querySelector(".win");
img.addEventListener("mousedown", function (e) {
    let imgLeft = e.pageX - startX - img.offsetLeft;
    let imgTop = e.pageY - startY - img.offsetTop;

    function moving(e) {
        img.style.left = e.pageX - imgLeft - startX + 'px';
        img.style.top = e.pageY - imgTop - startY + 'px';
    }
    document.addEventListener("mousemove", moving)

    document.addEventListener("mouseup", function (e) {
        if (img.offsetLeft > 370 && img.offsetLeft < 1370 && img.offsetTop > 110 && img.offsetTop < 720) {
            putHere.style.border = "5px red solid";
            win.style.display = "flex";
        } else {
            putHere.style.border = "5px black solid";
            win.style.display = "none";
        }
        document.removeEventListener('mousemove', moving)
    })
})

// top110 left370
// top720 left1370

