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
let lokaLeftSide = document.querySelector(".loka-left-side");
let lokaRightSide = document.querySelector(".loka-right-side");
let oliverLeftSide = document.querySelector(".oliver-left-side");
let oliverRightSide = document.querySelector(".oliver-right-side");
let bonjourLeftSide = document.querySelector(".bonjour-left-side");
let bonjourRightSide = document.querySelector(".bonjour-right-side");

let leftArr = [
  miniLeftSide,
  bonLeftSide,
  cornerLeftSide,
  homeBedLeftSide,
  lokaLeftSide,
  oliverLeftSide,
  bonjourLeftSide,
];
let rightArr = [
  miniRightSide,
  bonRightSide,
  cornerRightSide,
  homeBedRightSide,
  lokaRightSide,
  oliverRightSide,
  bonjourRightSide,
];

let miniTranslate = document.querySelectorAll(".mini-translate");
let bonTranslate = document.querySelectorAll(".bon-translate");
let cornerTranslate = document.querySelectorAll(".corner-translate");
let homeBedTranslate = document.querySelectorAll(".homeBed-translate");
let lokaTranslate = document.querySelectorAll(".loka-translate");
let oliverTranslate = document.querySelectorAll(".oliver-translate");
let bonjourTranslate = document.querySelectorAll(".bonjour-translate");

let translateArr = [
  miniTranslate,
  bonTranslate,
  cornerTranslate,
  homeBedTranslate,
  lokaTranslate,
  oliverTranslate,
  bonjourTranslate,
];

let miniTranslateNum = -900;
let bonTranslateNum = -900;
let cornerTranslateNum = -900;
let homeBedTranslateNum = -900;
let lokaTranslateNum = -900;
let oliverTranslateNum = -900;
let bonjourTranslateNum = -900;
let translateNum = [
  miniTranslateNum,
  bonTranslateNum,
  cornerTranslateNum,
  homeBedTranslateNum,
  lokaTranslateNum,
  oliverTranslateNum,
  bonjourTranslateNum,
];

let miniPageNum = 1;
let bonPageNum = 1;
let cornerPageNum = 1;
let homeBedPageNum = 1;
let lokaPageNum = 1;
let oliverPageNum = 1;
let bonjourPageNum = 1;
let pageNumArr = [
  miniPageNum,
  bonPageNum,
  cornerPageNum,
  homeBedPageNum,
  lokaPageNum,
  oliverPageNum,
  bonjourPageNum,
];

let miniPage = document.querySelector(".miniPage");
let bonPage = document.querySelector(".bonPage");
let cornerPage = document.querySelector(".cornerPage");
let homeBedPage = document.querySelector(".homeBedPage");
let lokaPage = document.querySelector(".lokaPage");
let oliverPage = document.querySelector(".oliverPage");
let bonjourPage = document.querySelector(".bonjourPage");

let pageArr = [
  miniPage,
  bonPage,
  cornerPage,
  homeBedPage,
  lokaPage,
  oliverPage,
  bonjourPage,
];

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
// bonjour---------------
bonjourLeftSide.addEventListener("click", function () {
  bonjourTranslateNum -= 300;
  bonjourPageNum--;
  bonjourPage.innerHTML = bonjourPageNum;
  if (bonjourTranslateNum <= -900) {
    bonjourTranslateNum = -900;
    bonjourPageNum = 1;
    bonjourPage.innerHTML = bonjourPageNum;
  }
  for (let i = 0; i < bonjourTranslate.length; i++) {
    bonjourTranslate[
      i
    ].style.transform = `translateX(${bonjourTranslateNum}px)`;
  }
});
bonjourRightSide.addEventListener("click", function () {
  bonjourTranslateNum += 300;
  bonjourPageNum++;

  if (bonjourTranslateNum >= 0) {
    bonjourTranslateNum = 0;
    bonjourPageNum = 4;
  }
  bonjourPage.innerHTML = bonjourPageNum;
  for (let i = 0; i < bonjourTranslate.length; i++) {
    bonjourTranslate[
      i
    ].style.transform = `translateX(${bonjourTranslateNum}px)`;
  }
});
// oliver----------------
oliverLeftSide.addEventListener("click", function () {
  oliverTranslateNum -= 300;
  oliverPageNum--;
  oliverPage.innerHTML = oliverPageNum;
  if (oliverTranslateNum <= -900) {
    oliverTranslateNum = -900;
    oliverPageNum = 1;
    oliverPage.innerHTML = oliverPageNum;
  }
  for (let i = 0; i < oliverTranslate.length; i++) {
    oliverTranslate[i].style.transform = `translateX(${oliverTranslateNum}px)`;
  }
});
oliverRightSide.addEventListener("click", function () {
  oliverTranslateNum += 300;
  oliverPageNum++;

  if (oliverTranslateNum >= 0) {
    oliverTranslateNum = 0;
    oliverPageNum = 4;
  }
  oliverPage.innerHTML = oliverPageNum;
  for (let i = 0; i < oliverTranslate.length; i++) {
    oliverTranslate[i].style.transform = `translateX(${oliverTranslateNum}px)`;
  }
});
// loka------------------
lokaLeftSide.addEventListener("click", function () {
  lokaTranslateNum -= 300;
  lokaPageNum--;
  lokaPage.innerHTML = lokaPageNum;
  if (lokaTranslateNum <= -900) {
    lokaTranslateNum = -900;
    lokaPageNum = 1;
    lokaPage.innerHTML = lokaPageNum;
  }
  for (let i = 0; i < lokaTranslate.length; i++) {
    lokaTranslate[i].style.transform = `translateX(${lokaTranslateNum}px)`;
  }
});
lokaRightSide.addEventListener("click", function () {
  lokaTranslateNum += 300;
  lokaPageNum++;
  if (lokaTranslateNum >= 0) {
    lokaTranslateNum = 0;
    lokaPageNum = 4;
  }
  lokaPage.innerHTML = lokaPageNum;
  for (let i = 0; i < lokaTranslate.length; i++) {
    lokaTranslate[i].style.transform = `translateX(${lokaTranslateNum}px)`;
  }
});
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
let lokaOpen = document.querySelector(".loka-open");
let oliverOpen = document.querySelector(".oliver-open");
let bonjourOpen = document.querySelector(".bonjour-open");

let openArr = [
  miniOpen,
  bonOpen,
  cornerOpen,
  homeBedOpen,
  lokaOpen,
  oliverOpen,
  bonjourOpen,
];

// 商品細節視窗
let miniDetail = document.querySelector(".mini-detail");
let bonDetail = document.querySelector(".bon-detail");
let cornerDetail = document.querySelector(".corner-detail");
let homeBedDetail = document.querySelector(".homeBed-detail");
let lokaDetail = document.querySelector(".loka-detail");
let oliverDetail = document.querySelector(".oliver-detail");
let bonjourDetail = document.querySelector(".bonjour-detail");

let detailArr = [
  miniDetail,
  bonDetail,
  cornerDetail,
  homeBedDetail,
  lokaDetail,
  oliverDetail,
  bonjourDetail,
];

// 關閉細節按鍵
let miniClose = document.querySelector(".mini-close");
let bonClose = document.querySelector(".bon-close");
let cornerClose = document.querySelector(".corner-close");
let homeBedClose = document.querySelector(".homeBed-close");
let lokaClose = document.querySelector(".loka-close");
let oliverClose = document.querySelector(".oliver-close");
let bonjourClose = document.querySelector(".bonjour-close");

let closeArr = [
  miniClose,
  bonClose,
  cornerClose,
  homeBedClose,
  lokaClose,
  oliverClose,
  bonjourClose,
];

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
let heartTableOne = document.querySelector(".heart-table-one");
let heartTableTwo = document.querySelector(".heart-table-two");
let heartTableThree = document.querySelector(".heart-table-three");
let heartTableFour = document.querySelector(".heart-table-four");
let heartTableFive = document.querySelector(".heart-table-five");
let heartTableSix = document.querySelector(".heart-table-six");
let heartTableSeven = document.querySelector(".heart-table-seven");
let heartTableEight = document.querySelector(".heart-table-eight");
let heartTableNine = document.querySelector(".heart-table-nine");

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
  heartTableOne,
  heartTableTwo,
  heartTableThree,
  heartTableFour,
  heartTableFive,
  heartTableSix,
  heartTableSeven,
  heartTableEight,
  heartTableNine,
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
let heart19 = false;
let heart20 = false;
let heart21 = false;
let heart22 = false;
let heart23 = false;
let heart24 = false;
let heart25 = false;
let heart26 = false;
let heart27 = false;
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
  heart19,
  heart20,
  heart21,
  heart22,
  heart23,
  heart24,
  heart25,
  heart26,
];
let countFavorite = 0;
let favoriteListNum = document.querySelector(".favorite-list-num");

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
      countFavorite++;
    } else {
      heartChangeArr[i].src = "../../furniture_img/H00.png";
      countFavorite--;
    }
    favoriteListNum.innerHTML = countFavorite;
  });
}

// SOFA BED TABLE切換
let sofaBtn = document.querySelector(".sofa-btn");
let bedBtn = document.querySelector(".bed-btn");
let tableBtn = document.querySelector(".table-btn");
let sofaItemsAll = document.querySelector(".sofa-items-all");
let bedItemsAll = document.querySelector(".bed-items-all");
let tableItemsAll = document.querySelector(".table-items-all");

bedBtn.addEventListener("click", function () {
  sofaItemsAll.style.display = "none";
  tableItemsAll.style.display = "none";
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
  tableItemsAll.style.display = "none";
  bedBtn.style.backgroundColor = "rgb(49, 48, 48)";
  tableBtn.style.backgroundColor = "rgb(49, 48, 48)";
  bedBtn.style.color = "white";
  tableBtn.style.color = "white";
  sofaBtn.style.backgroundColor = "white";
  sofaBtn.style.color = "black";
});

tableBtn.addEventListener("click", function () {
  sofaItemsAll.style.display = "none";
  bedItemsAll.style.display = "none";
  tableItemsAll.style.display = "flex";
  tableBtn.style.backgroundColor = "white";
  tableBtn.style.color = "black";
  bedBtn.style.color = "white";
  sofaBtn.style.color = "white";
  bedBtn.style.backgroundColor = "rgb(49, 48, 48)";
  sofaBtn.style.backgroundColor = "rgb(49, 48, 48)";
});
