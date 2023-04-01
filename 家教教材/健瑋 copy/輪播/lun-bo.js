let pic = [
    "url(../pic/puppy.jpg)",
    "url(../pic/dog1.jpg)",
    "url(../pic/dog2.jpg)",
    "url(../pic/dog3.jpg)",
]
let num = 0;
let centerDiv = document.querySelector(".center-div");
let leftButton = document.querySelector("#leftButton");
let rightButton = document.querySelector("#rightButton");
// url(../pic/puppy.jpg)
centerDiv.style.backgroundImage = pic[0];

setInterval(function () {
    num += 1

    if (num == 2 || num == 3) {
        centerDiv.style.backgroundPosition = "center";
    } else if (num == 0) {

        centerDiv.style.backgroundPosition = "bottom";

    }

    centerDiv.style.backgroundImage = pic[num];
    if (num > pic.length - 1) {
        centerDiv.style.backgroundImage = pic[0];
        centerDiv.style.backgroundPosition = "bottom";
        num = 0;
    } else if (num < 0) {
        centerDiv.style.backgroundImage = pic[pic.length - 1];
        centerDiv.style.backgroundPosition = "center";
        num = pic.length - 2;
    }

}, 3000)

leftButton.addEventListener("click", function () {
    num = (num - 1 + pic.length) % pic.length;
    centerDiv.style.backgroundImage = pic[num];
    if (num == 2 || num == 3) {
        centerDiv.style.backgroundPosition = "center";
    } else if (num == 0) {

        centerDiv.style.backgroundPosition = "bottom";

    }
})

rightButton.addEventListener("click", function () {
    num = (num + 1) % pic.length;
    centerDiv.style.backgroundImage = pic[num];
    if (num == 2 || num == 3) {
        centerDiv.style.backgroundPosition = "center";
    } else if (num == 0) {

        centerDiv.style.backgroundPosition = "bottom";

    }
})