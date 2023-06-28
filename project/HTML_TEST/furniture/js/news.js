let topCase = document.querySelector(".top-case");
let underCaseTrueOrFalse = false;
let underCase = document.querySelector(".under-case");
let bannerText = document.querySelector(".banner-text");
let bannerTextTrueOrFalse = false;
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
