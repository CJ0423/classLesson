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

let lastScrollPosition = document.documentElement.scrollTop;
window.addEventListener("scroll", function () {
  let currentScrollPosition = document.documentElement.scrollTop;

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

let miniLeftSide = document.querySelector(".mini-left-side");
let miniRightSide = document.querySelector(".mini-right-side");
let bonLeftSide = document.querySelector(".bon-left-side");
let bonRightSide = document.querySelector(".bon-right-side");
let cornerLeftSide = document.querySelector(".corner-left-side");
let cornerRightSide = document.querySelector(".corner-right-side");
let homeBedLeftSide = document.querySelector(".homeBed-left-side");
let homeBedRightSide = document.querySelector(".homeBed-right-side");

let leftArr = [miniLeftSide, bonLeftSide, cornerLeftSide, homeBedLeftSide];
let rightArr = [miniRightSide, bonRightSide, cornerRightSide, homeBedRightSide];

let miniTranslate = document.querySelectorAll(".mini-translate");
let bonTranslate = document.querySelectorAll(".bon-translate");
let cornerTranslate = document.querySelectorAll(".corner-translate");
let homeBedTranslate = document.querySelectorAll(".homeBed-translate");

let translateArr = [
  miniTranslate,
  bonTranslate,
  cornerTranslate,
  homeBedTranslate,
];

let miniTranslateNum = -900;
let bonTranslateNum = -900;
let cornerTranslateNum = -900;
let homeBedTranslateNum = -900;
let translateNum = [
  miniTranslateNum,
  bonTranslateNum,
  cornerTranslateNum,
  homeBedTranslateNum,
];

let miniPageNum = 1;
let bonPageNum = 1;
let cornerPageNum = 1;
let homeBedPageNum = 1;
let pageNumArr = [miniPageNum, bonPageNum, cornerPageNum, homeBedPageNum];

let miniPage = document.querySelector(".miniPage");
let bonPage = document.querySelector(".bonPage");
let cornerPage = document.querySelector(".cornerPage");
let homeBedPage = document.querySelector(".homeBedPage");
let pageArr = [miniPage, bonPage, cornerPage, homeBedPage];

// for (let i = 0; i < leftArr.length; i++) {
//   leftArr[i].addEventListener("click", function () {
//     if (translateNum[i] <= -900) {
//       translateNum[i] = -900;
//       pageNumArr[i] = 1;
//     } else {
//       translateNum[i] -= 300;
//       pageNumArr[i]--;
//     }
//     pageArr[i].innerHTML = pageNumArr[i];

//     for (let j = 0; j < translateArr[i].length; j++) {
//       translateArr[i][j].style.transform = `translateX(${translateNum[i]}px)`;
//     }
//   });
// }
// homeBed---------------
homeBedLeftSide.addEventListener("click", function () {
  homeBedTranslateNum -= 300;
  homeBedPageNum--;
  homeBedPage.innerHTML = homeBedPageNum;
  if (homeBedTranslateNum <= -900) {
    homeBedTranslateNum = -900;
    homeBedPageNum = 1;
    homeBedPage.innerHTML = homeBedPageNum;
  }
  for (let i = 0; i < homeBedTranslate.length; i++) {
    homeBedTranslate[
      i
    ].style.transform = `translateX(${homeBedTranslateNum}px)`;
  }
});
homeBedRightSide.addEventListener("click", function () {
  homeBedTranslateNum += 300;
  homeBedPageNum++;
  if (homeBedTranslateNum >= 0) {
    homeBedTranslateNum = 0;
    homeBedPageNum = 4;
  }
  homeBedPage.innerHTML = homeBedPageNum;
  for (let i = 0; i < homeBedTranslate.length; i++) {
    homeBedTranslate[
      i
    ].style.transform = `translateX(${homeBedTranslateNum}px)`;
  }
});
//corner-----------------
cornerLeftSide.addEventListener("click", function () {
  cornerTranslateNum -= 300;
  cornerPageNum--;
  cornerPage.innerHTML = cornerPageNum;
  if (cornerTranslateNum <= -900) {
    cornerTranslateNum = -900;
    cornerPageNum = 1;
    cornerPage.innerHTML = cornerPageNum;
  }
  for (let i = 0; i < cornerTranslate.length; i++) {
    cornerTranslate[i].style.transform = `translateX(${cornerTranslateNum}px)`;
  }
});
cornerRightSide.addEventListener("click", function () {
  cornerTranslateNum += 300;
  cornerPageNum++;
  if (cornerTranslateNum >= 0) {
    cornerTranslateNum = 0;
    cornerPageNum = 4;
  }
  cornerPage.innerHTML = cornerPageNum;
  for (let i = 0; i < cornerTranslate.length; i++) {
    cornerTranslate[i].style.transform = `translateX(${cornerTranslateNum}px)`;
  }
});
//bon-----------------
bonLeftSide.addEventListener("click", function () {
  bonTranslateNum -= 300;
  bonPageNum--;
  bonPage.innerHTML = bonPageNum;
  if (bonTranslateNum <= -900) {
    bonTranslateNum = -900;
    bonPageNum = 1;
    bonPage.innerHTML = bonPageNum;
  }
  for (let i = 0; i < bonTranslate.length; i++) {
    bonTranslate[i].style.transform = `translateX(${bonTranslateNum}px)`;
  }
});
bonRightSide.addEventListener("click", function () {
  bonTranslateNum += 300;
  bonPageNum++;
  if (bonTranslateNum >= 0) {
    bonTranslateNum = 0;
    bonPageNum = 4;
  }
  bonPage.innerHTML = bonPageNum;
  for (let i = 0; i < bonTranslate.length; i++) {
    bonTranslate[i].style.transform = `translateX(${bonTranslateNum}px)`;
  }
});
//mini-----------------
miniLeftSide.addEventListener("click", function () {
  miniTranslateNum -= 300;
  miniPageNum--;
  miniPage.innerHTML = miniPageNum;
  if (miniTranslateNum <= -900) {
    miniTranslateNum = -900;
    miniPageNum = 1;
    miniPage.innerHTML = miniPageNum;
  }
  for (let i = 0; i < miniTranslate.length; i++) {
    miniTranslate[i].style.transform = `translateX(${miniTranslateNum}px)`;
  }
});
miniRightSide.addEventListener("click", function () {
  miniTranslateNum += 300;
  miniPageNum++;
  miniPage.innerHTML = miniPageNum;
  if (miniTranslateNum >= 0) {
    miniTranslateNum = 0;
    miniPageNum = 4;
    miniPage.innerHTML = miniPageNum;
  }
  for (let i = 0; i < miniTranslate.length; i++) {
    miniTranslate[i].style.transform = `translateX(${miniTranslateNum}px)`;
  }
});

// ---------------------------------------
// 點擊商品的介面
let miniOpen = document.querySelector(".mini-open");
let bonOpen = document.querySelector(".bon-open");
let cornerOpen = document.querySelector(".corner-open");
let homeBedOpen = document.querySelector(".home-bed-open");
let openArr = [miniOpen, bonOpen, cornerOpen, homeBedOpen];

// 商品細節視窗
let miniDetail = document.querySelector(".mini-detail");
let bonDetail = document.querySelector(".bon-detail");
let cornerDetail = document.querySelector(".corner-detail");
let homeBedDetail = document.querySelector(".homeBed-detail");
let detailArr = [miniDetail, bonDetail, cornerDetail, homeBedDetail];

// 關閉細節按鍵
let miniClose = document.querySelector(".mini-close");
let bonClose = document.querySelector(".bon-close");
let cornerClose = document.querySelector(".corner-close");
let homeBedClose = document.querySelector(".homeBed-close");
let closeArr = [miniClose, bonClose, cornerClose, homeBedClose];

for (let i = 0; i < openArr.length; i++) {
  openArr[i].addEventListener("click", function () {
    detailArr[i].style.display = "flex";
  });
}

for (let i = 0; i < closeArr.length; i++) {
  closeArr[i].addEventListener("click", function () {
    detailArr[i].style.display = "none";
  });
}
// ----------------------------------------
// let heartChange = document.querySelectorAll(".heart-change");
// for (let i = 0; i < heartChange.length; i++) {
//   if (heartChange[i].src == "../../furniture_img/H00.png") {
//     heartChange[i].src = "../../furniture_img/H03.svg";
//   } else {
//     heartChange[i].src = "../../furniture_img/H00.png";
//   }
// }
let heartChange = document.querySelector(".heart-change");
let heartChangeTwo = document.querySelector(".heart-change-two");
let heartChangeThree = document.querySelector(".heart-change-three");
let heartChangeFour = document.querySelector(".heart-change-four");
let heartChangeFive = document.querySelector(".heart-change-five");
let heartChangeSix = document.querySelector(".heart-change-six");
let heartChangeSeven = document.querySelector(".heart-change-seven");
let heartChangeEight = document.querySelector(".heart-change-eight");
let heartChangeNine = document.querySelector(".heart-change-nine");
let heartBedOne = document.querySelector(".heart-bed-one");
let heartBedTwo = document.querySelector(".heart-bed-two");
let heartBedThree = document.querySelector(".heart-bed-three");
let heartBedFour = document.querySelector(".heart-bed-four");
let heartBedFive = document.querySelector(".heart-bed-five");
let heartBedSix = document.querySelector(".heart-bed-six");
let heartBedSeven = document.querySelector(".heart-bed-seven");
let heartBedEight = document.querySelector(".heart-bed-eight");
let heartBedNine = document.querySelector(".heart-bed-nine");

let heartChangeArr = [
  heartChange,
  heartChangeTwo,
  heartChangeThree,
  heartChangeFour,
  heartChangeFive,
  heartChangeSix,
  heartChangeSeven,
  heartChangeEight,
  heartChangeNine,
  heartBedOne,
  heartBedTwo,
  heartBedThree,
  heartBedFour,
  heartBedFive,
  heartBedSix,
  heartBedSeven,
  heartBedEight,
  heartBedNine,
];

let heart1 = false;
let heart2 = false;
let heart3 = false;
let heart4 = false;
let heart5 = false;
let heart6 = false;
let heart7 = false;
let heart8 = false;
let heart9 = false;
let heart10 = false;
let heart11 = false;
let heart12 = false;
let heart13 = false;
let heart14 = false;
let heart15 = false;
let heart16 = false;
let heart17 = false;
let heart18 = false;
let heartTrueFalse = [
  heart1,
  heart2,
  heart3,
  heart4,
  heart5,
  heart6,
  heart7,
  heart8,
  heart9,
  heart10,
  heart11,
  heart12,
  heart13,
];
heartChange.addEventListener("click", function () {
  heart1 = !heart1;
  if (heart1) {
    heartChange.src = "../../furniture_img/H03.svg";
  } else {
    heartChange.src = "../../furniture_img/H00.png";
  }
});
for (let i = 0; i < heartChangeArr.length; i++) {
  heartChangeArr[i].addEventListener("click", function () {
    heartTrueFalse[i] = !heartTrueFalse[i];
    if (heartTrueFalse[i]) {
      heartChangeArr[i].src = "../../furniture_img/H03.svg";
    } else {
      heartChangeArr[i].src = "../../furniture_img/H00.png";
    }
  });
}

// SOFA BED TABLE切換
let sofaBtn = document.querySelector(".sofa-btn");
let bedBtn = document.querySelector(".bed-btn");
let tableBtn = document.querySelector(".table-btn");
let sofaItemsAll = document.querySelector(".sofa-items-all");
let bedItemsAll = document.querySelector(".bed-items-all");
let tableItemsAll = document.querySelector(".table-items-al");

bedBtn.addEventListener("click", function () {
  sofaItemsAll.style.display = "none";
  bedItemsAll.style.display = "flex";
  sofaBtn.style.backgroundColor = "rgb(49, 48, 48)";
  tableBtn.style.backgroundColor = "rgb(49, 48, 48)";
  sofaBtn.style.color = "white";
  tableBtn.style.color = "white";
  bedBtn.style.backgroundColor = "white";
  bedBtn.style.color = "black";
});

sofaBtn.addEventListener("click", function () {
  sofaItemsAll.style.display = "flex";
  bedItemsAll.style.display = "none";
  bedBtn.style.backgroundColor = "rgb(49, 48, 48)";
  tableBtn.style.backgroundColor = "rgb(49, 48, 48)";
  bedBtn.style.color = "white";
  tableBtn.style.color = "white";
  sofaBtn.style.backgroundColor = "white";
  sofaBtn.style.color = "black";
});
