let topCase = document.querySelector(".top-case");
let underCase = document.querySelector(".under-case");
let underCaseTrueOrFalse = false;
let checkMoreBtn = document.querySelector(".check-more-btn");
let birdChair = document.querySelector(".bird-chair");
let leafPic = document.querySelector(".leaf-pic");

topCase.addEventListener("click", function () {
  underCaseTrueOrFalse = !underCaseTrueOrFalse;
  if (underCaseTrueOrFalse) {
    underCase.style.display = "flex";
  } else {
    underCase.style.display = "none";
  }
});

checkMoreBtn.addEventListener("click", function () {
  birdChair.style.display = "flex";
  leafPic.style.display = "flex";
  checkMoreBtn.innerHTML = "已無更多商品";
  checkMoreBtn.style.cursor = "default";
});
