let topCase = document.querySelector(".top-case");
let underCase = document.querySelector(".under-case");
let underCaseTrueOrFalse = false;
let startShow = document.querySelector(".start-show");
let startOne = document.querySelector(".start-one");
let startSecond = document.querySelector(".start-second");
let startThird = document.querySelector(".start-third");
let startFour = document.querySelector(".start-four");
let showTxt = document.querySelector(".show-txt");
let showTxtArr = [
  "C",
  "h",
  "a",
  "r",
  "a",
  "c",
  "t",
  "e",
  "r",
  "人",
  "物",
  "介",
  "紹",
];
let allhuman = document.querySelectorAll(".allhuman");
let human1 = document.querySelector(".human1");
let human2 = document.querySelector(".human2");
let human3 = document.querySelector(".human3");
let human4 = document.querySelector(".human4");
let introduce = document.querySelector(".introduce");
let widthNum = -1200;
let bannerTeam = document.querySelector(".banner-team");
let introduceMid = document.querySelector(".introduce-mid");
let introduceMid2 = document.querySelector(".introduce-mid2");
let bannerTop = document.querySelector(".banner-top");
let viewMore = document.querySelector(".view-more");
let viewMore2 = document.querySelector(".view-more2");
let janeClose = document.querySelector(".jane-close");
let justinClose = document.querySelector(".justin-close");

let janeIntroduce = document.querySelector(".jane-introduce");
let justinIntroduce = document.querySelector(".justin-introduce");

let close1 = document.querySelectorAll(".close1");
let startAll = document.querySelectorAll(".start-all");
let startCount = 0;
let close2 = document.querySelector(".close2");
let arrow = document.querySelector(".arrow");
let arrow2 = document.querySelector(".arrow2");

let janeBtn1 = document.querySelector(".jane-btn1");
let janeBtn2 = document.querySelector(".jane-btn2");
let janePic1 = document.querySelector(".jane-pic1");
let janePic2 = document.querySelector(".jane-pic2");
let janePic3 = document.querySelector(".jane-pic3");
let janePic4 = document.querySelector(".jane-pic4");
let justinPic1 = document.querySelector(".justin-pic1");
let justinPic2 = document.querySelector(".justin-pic2");
let justinPic3 = document.querySelector(".justin-pic3");
let justinPic4 = document.querySelector(".justin-pic4");
let justinBtn1 = document.querySelector(".justin-btn1");
let justinBtn2 = document.querySelector(".justin-btn2");

topCase.addEventListener("click", function () {
  underCaseTrueOrFalse = !underCaseTrueOrFalse;
  if (underCaseTrueOrFalse) {
    underCase.style.display = "flex";
  } else {
    underCase.style.display = "none";
  }
});
let header = document.querySelector("header");
// --------------------------------------------
viewMore2.addEventListener("click", function () {
  justinIntroduce.style.display = "flex";
});
viewMore.addEventListener("click", function () {
  janeIntroduce.style.display = "flex";
});
janeClose.addEventListener("click", function () {
  janeIntroduce.style.display = "none";
});
justinClose.addEventListener("click", function () {
  justinIntroduce.style.display = "none";
});
justinBtn1.addEventListener("click", function () {
  justinPic1.style.display = "flex";
  justinPic2.style.display = "flex";
  justinPic3.style.display = "none";
  justinPic4.style.display = "none";
  justinBtn1.style.color = "black";
  justinBtn1.style.backgroundColor = "white";
  justinBtn2.style.color = "white";
  justinBtn2.style.backgroundColor = "black";
});
justinBtn2.addEventListener("click", function () {
  justinPic1.style.display = "none";
  justinPic2.style.display = "none";
  justinPic3.style.display = "flex";
  justinPic4.style.display = "flex";
  justinBtn1.style.color = "white";
  justinBtn1.style.backgroundColor = "black";
  justinBtn2.style.color = "black";
  justinBtn2.style.backgroundColor = "white";
});
janeBtn1.addEventListener("click", function () {
  janePic1.style.display = "flex";
  janePic2.style.display = "flex";
  janePic3.style.display = "none";
  janePic4.style.display = "none";
  janeBtn1.style.color = "black";
  janeBtn1.style.backgroundColor = "white";
  janeBtn2.style.color = "white";
  janeBtn2.style.backgroundColor = "black";
});
janeBtn2.addEventListener("click", function () {
  janePic1.style.display = "none";
  janePic2.style.display = "none";
  janePic3.style.display = "flex";
  janePic4.style.display = "flex";
  janeBtn1.style.color = "white";
  janeBtn1.style.backgroundColor = "black";
  janeBtn2.style.color = "black";
  janeBtn2.style.backgroundColor = "white";
});
// ----------------------------------------
window.addEventListener("load", function () {
  // setTimeout(() => {
  //   startShow.style.transform = "translateX(0px)";
  // }, 1000);
  let startInterval = setInterval(() => {
    if (startCount < startAll.length) {
      startAll[startCount].style.opacity = "1";
      startCount++;
    } else {
      clearInterval(startInterval);
    }
  }, 400);
  setTimeout(() => {
    showTxt.style.display = "flex";
    let i = 0;
    let interval = setInterval(() => {
      if (i < showTxtArr.length) {
        showTxt.innerHTML += showTxtArr[i];
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          startShow.style.opacity = "0";
        }, 500); // 1秒後執行關閉操作
        setTimeout(() => {
          startShow.style.display = "none";
          header.style.display = "flex";
          bannerTeam.style.display = "flex";
        }, 3000); // 1秒後執行關閉操作
      }
    }, 300);
  }, 2000);
});

bannerTeam.addEventListener("mouseover", function () {
  bannerTop.style.transform = "translateX(0px)";
  setTimeout(() => {
    bannerTop.style.opacity = "1";
  }, 1000);
});
