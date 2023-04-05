let talkAboutUs = document.querySelector(".talk-about-us");
let navBar = document.querySelector(".nav-bar");
let textAboutUs = document.querySelector(".text-about-us");
let houseText = document.querySelector("#house-text-home");
let houseImg = document.querySelector("#house-img");
let houseTextQuestion = document.querySelector("#house-text-question");
let houseImgAbout = document.querySelector("#house-img-about");
let houseTextAbout = document.querySelector("#house-text-about");

let changeText = document.querySelectorAll('.change-text');
let changeTextEng = ['Hong-Yue', 'About Us'];
// <let changeTextCh = ['宏悅家具', '關<br>於<br>我<br>們'];>
let changeTextCh = ['宏悅家具', '關於我們'];

for (let i = 0; i < changeText.length; i++) {
    changeText[i].addEventListener("click", function () {
        if (changeText[i].innerHTML == changeTextCh[i]) {
            changeText[i].innerHTML = changeTextEng[i];
        } else {
            changeText[i].innerHTML = changeTextCh[i];
        }

    })
}
houseText.addEventListener("mouseover", function () {
    houseText.innerHTML = "首頁";
})
houseText.addEventListener("mouseleave", function () {
    houseText.innerHTML = '<img src="./pic/house.svg" alt="" id="house-img-home">';
})
houseTextQuestion.addEventListener("mouseover", function () {
    houseTextQuestion.innerHTML = "FAQ";
})
houseTextAbout.addEventListener("mouseover", function () {
    houseTextAbout.innerHTML = "關於我們";
})
houseTextAbout.addEventListener("mouseleave", function () {
    houseTextAbout.innerHTML = '<img src="./pic/address.svg" alt="" id="house-img-about">';
})
houseTextQuestion.addEventListener("mouseleave", function () {
    houseTextQuestion.innerHTML = '<img src="./pic/question.svg" alt="" id="house-img-question">';
})

talkAboutUs.addEventListener("mouseover", function () {
    textAboutUs.style.display = "flex";
    setTimeout(function () {
        textAboutUs.style.left = "500px";
    }, 400)
})
