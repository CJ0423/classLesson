let topCase = document.querySelector(".top-case");
let underCaseTrueOrFalse = false;
let underCase = document.querySelector(".under-case");
let bannerText = document.querySelector(".banner-text");
let bannerTextTrueOrFalse = false;
let dragonBoatText = document.querySelector(".dragonBoat-text");
let clickMore = document.querySelector(".click-more");
let christmasFather = document.querySelector(".christmas-father");
let halloweenFather = document.querySelector(".halloween-father");
let homeText = document.querySelector(".homeText");
let newsText = document.querySelector(".newsText");

topCase.addEventListener("click", function () {
  underCaseTrueOrFalse = !underCaseTrueOrFalse;
  if (underCaseTrueOrFalse) {
    underCase.style.display = "flex";
  } else {
    underCase.style.display = "none";
  }
});

setInterval(() => {
  bannerTextTrueOrFalse = !bannerTextTrueOrFalse;
  if (bannerTextTrueOrFalse) {
    bannerText.style.color = "rgb(101, 100, 100)";
  } else {
    bannerText.style.color = "rgb(70, 69, 69)";
  }
}, 1500);

clickMore.addEventListener("click", function () {
  christmasFather.style.display = "flex";
  halloweenFather.style.display = "flex";
  clickMore.innerHTML = "沒有更多資料了";
  clickMore.style.color = "white";
  clickMore.style.border = "none";
  clickMore.style.borderBottom = "1.5px #b0a89f solid";
  clickMore.style.borderRadius = "0";
  clickMore.style.boxShadow = "none";
  clickMore.style.cursor = "default";
});

// homeText.addEventListener("mouseover", function () {
//   homeText.textContent = "首頁";
// });
// homeText.addEventListener("mouseout", function () {
//   homeText.textContent = "Home";
// });
// newsText.addEventListener("mouseover", function () {
//   newsText.textContent = "最新消息";
// });
// newsText.addEventListener("mouseout", function () {
//   newsText.textContent = "News";
// });
