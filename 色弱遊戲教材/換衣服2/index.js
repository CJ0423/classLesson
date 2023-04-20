
// let img = document.querySelector(".img");
// let mainAll = document.querySelector(".main-all");
// let putHere = document.querySelector(".put-here");
// let startX = mainAll.offsetLeft;
// let startY = mainAll.offsetTop;
// let win = document.querySelector(".win");
// img.addEventListener("mousedown", function (e) {
//     let imgLeft = e.pageX - startX - img.offsetLeft;
//     console.log(startX)
//     let imgTop = e.pageY - startY - img.offsetTop;

//     function moving(e) {
//         img.style.left = e.pageX - imgLeft - startX + 'px';
//         img.style.top = e.pageY - imgTop - startY + 'px';
//     }
//     document.addEventListener("mousemove", moving)

//     document.addEventListener("mouseup", function (e) {
//         if (img.offsetLeft > 370 && img.offsetLeft < 1370 && img.offsetTop > 110 && img.offsetTop < 720) {
//             putHere.style.border = "5px red solid";
//             win.style.display = "flex";
//         } else {
//             putHere.style.border = "5px black solid";
//             win.style.display = "none";
//         }
//         document.removeEventListener('mousemove', moving)
//     })
// })

let img = document.querySelector('#img1');
let isMove = false;
let putHere = document.querySelector(".put-here");
let win = document.querySelector(".win");

img.addEventListener('click', move);

function move(e) {
    isMove = !isMove;
    if (isMove) {
        img.addEventListener('mousemove', follow)
    } else {
        img.removeEventListener('mousemove', follow)
    }
}

function follow(e) {
    console.log(e)
    img.style.left = `${e.clientX - img.offsetWidth / 2}px`
    img.style.top = `${e.clientY - img.offsetHeight / 2}px`
    if (parseInt(img.offsetLeft) > 370 && parseInt(img.offsetLeft) < 1370 && parseInt(img.offsetTop) > 110 && parseInt(img.offsetTop) < 720) {
        putHere.style.border = "5px red solid";
        win.style.display = "flex";
    } else {
        putHere.style.border = "5px black solid";
        win.style.display = "none";
    }

}
//  <script>
// const dragElement=document.querySelector(".glass")
// let isMove=false
// // 每次點擊時都會進入到move中點擊1下啟動跟隨滑鼠移動再點一次則是取消跟隨滑鼠函數
// function move(e){
//     isMove=!isMove
//     if(isMove){
//         dragElement.addEventListener("mousemove", followMouse)
//     }
//     else{
//         console.log("hi")

//         dragElement.removeEventListener("mousemove",followMouse)
//     }
// }
// function followMouse(e){
//     // 點擊後確保滑鼠在正中間
//     console.log(e)
//     console.log("瀏覽器位置"+e.clientY)
//     console.log("圖片位置"+dragElement.style.top)
//     dragElement.style.left=`${e.clientX - dragElement.offsetWidth/2}px`
//     dragElement.style.top=`${e.clientY - dragElement.offsetHeight/2}px`
//     // requestAnimationFrame(followMouse)
// }
// dragElement.addEventListener("click",move)

// // clientX表示整個視窗中X軸的位置 由左往右從0開始
// // clientY表示整個視窗中Y軸的位置 由上往下從0開始
// // offsetHeight表示這個元素的高度
// // offsetWidth表示這個元素的寬度
// </script>

