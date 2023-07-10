let topCase = document.querySelector(".top-case");
let underCase = document.querySelector(".under-case");
let underCaseTrueOrFalse = false;
let aboutUs = document.querySelector(".about-us");
let aboutUsArr = ["A", "b", "o", "u", "t", "U", "s"];
let heartPic = document.querySelector(".heart-pic");
let sectionIntroduce = document.querySelector(".section-introduce");
let currentIndex = 0;
let heartMove = document.querySelectorAll(".heart-move");
let huSlogon = document.querySelector(".hu-slogon");

let heartArr = [
  "../../furniture_img/H01.svg",
  "../../furniture_img/H02.svg",
  "../../furniture_img/H03.svg",
];
topCase.addEventListener("click", function () {
  underCaseTrueOrFalse = !underCaseTrueOrFalse;
  if (underCaseTrueOrFalse) {
    underCase.style.display = "flex";
  } else {
    underCase.style.display = "none";
  }
});

window.addEventListener("load", function () {
  let i = 0;
  const typingInterval = setInterval(function () {
    if (i < aboutUsArr.length) {
      aboutUs.innerHTML += aboutUsArr[i];
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, 200);
});

// window.addEventListener("load", function () {
//   heartPic.src = heartArr[currentIndex];

//   setInterval(() => {
//     heartPic.src = heartArr[0];
//     currentIndex++;
//     if (currentIndex > heartArr.length) {
//       currentIndex = 0;
//     }
//     heartPic.src = heartArr[currentIndex];
//   }, 1000);
// });
huSlogon.addEventListener("mouseover", function () {
  let currentIndex = 0;
  const interval = setInterval(() => {
    if (currentIndex > 0) {
      heartMove[currentIndex - 1].style.opacity = "0";
    }
    heartMove[currentIndex].style.opacity = "0";
    currentIndex++;

    if (currentIndex >= heartMove.length) {
      clearInterval(interval); // 清除定时器
    }
  }, 500);
});
huSlogon.addEventListener("mouseout", function () {
  let currentIndex = 0;
  const interval = setInterval(() => {
    if (currentIndex > 0) {
      heartMove[currentIndex - 1].style.opacity = "1";
    }
    heartMove[currentIndex].style.opacity = "1";
    currentIndex++;

    if (currentIndex >= heartMove.length) {
      clearInterval(interval); // 清除定时器
    }
  }, 500);
});
