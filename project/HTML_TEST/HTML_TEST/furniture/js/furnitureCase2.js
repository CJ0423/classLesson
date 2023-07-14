let topCase = document.querySelector(".top-case");
let underCase = document.querySelector(".under-case");
let underCaseTrueOrFalse = false;
topCase.addEventListener("click", function () {
  underCaseTrueOrFalse = !underCaseTrueOrFalse;
  // alert(underCaseTrueOrFalse);
  if (underCaseTrueOrFalse) {
    underCase.style.display = "flex";
  } else {
    underCase.style.display = "none";
  }
});
// ---------------------------------------
let bannerTxt = document.querySelector(".banner-txt");
let bannerTxtArr = ["家", "具", "案", "例"];
let bannerTxtNum = 0;
let finalTxt = document.querySelector(".final-txt");

setInterval(() => {
  if (bannerTxtNum < bannerTxtArr.length) {
    bannerTxt.innerHTML += bannerTxtArr[bannerTxtNum];
  }
  bannerTxtNum++;

  setTimeout(() => {
    bannerTxt.style.transform = "translateX(300px)";
    bannerTxt.style.opacity = "0";
  }, 2500);
  setTimeout(() => {
    finalTxt.style.opacity = "1";
  }, 3500);
}, 600);

let lastScrollPosition =
  window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", function () {
  let currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition > lastScrollPosition) {
    // 向下滑动
    // alert("向下滑动");
    // 可以在这里编写处理向下滑动的代码
    finalTxt.style.fontSize = "50px";
  } else {
    // 向上滑动
    // alert("向上滑动");
    // 可以在这里编写处理向上滑动的代码
    finalTxt.style.fontSize = "100px";
  }

  // 更新上一次滚动位置
  lastScrollPosition = currentScrollPosition;
});
// ---------------------------------
let leftSide = document.querySelector(".left-side");
let rightSide = document.querySelector(".right-side");
let miniTranslate = document.querySelectorAll(".mini-translate");
let miniTranslateNum = -900;
let miniClose = document.querySelector(".mini-close");
let miniDetail = document.querySelector(".mini-detail");

leftSide.addEventListener("click", function () {
  miniTranslateNum -= 300;
  if (miniTranslateNum <= -900) {
    miniTranslateNum = -900;
    leftSide.style.color = "gray";
  }
  for (let i = 0; i < miniTranslate.length; i++) {
    miniTranslate[i].style.transform = `translateX(${miniTranslateNum}px)`;
  }
});
rightSide.addEventListener("click", function () {
  miniTranslateNum += 300;
  if (miniTranslateNum >= 0) {
    miniTranslateNum = 0;
    rightSide.style.color = "gray";
  }
  for (let i = 0; i < miniTranslate.length; i++) {
    miniTranslate[i].style.transform = `translateX(${miniTranslateNum}px)`;
  }
});
miniClose.addEventListener("click", function () {
  miniDetail.style.display = "none";
});
// ---------------------------------------
let sofaItemsPic = document.querySelector(".sofa-items-pic");

sofaItemsPic.addEventListener("click", function () {
  miniDetail.style.display = "flex";
});
