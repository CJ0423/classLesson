var jpg1 = document.getElementById("jpg1");
var jpg2 = document.getElementById("jpg2");
var jpg3 = document.getElementById("jpg3");
var jpg4 = document.getElementById("jpg4");


var pic = [
    "pic/010.jpg",
    "pic/011.jpg",
    "pic/012.jpg",
]
var num = 0;
var num1 = 1;
setInterval(function () {
    jpg1.src = "pic/01" + num + ".jpg";
    num++
    if (num > 2) {
        num = 0
    }
}, 2000)
