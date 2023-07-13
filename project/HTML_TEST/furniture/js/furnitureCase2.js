let topCase = document.querySelector(".top-case");
let underCase = document.querySelector(".under-case");
let underCaseTrueOrFalse = false;
topCase.addEventListener("click", function () {
  underCaseTrueOrFalse = !underCaseTrueOrFalse;
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
