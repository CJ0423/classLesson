let checkNameRegex = /^[\u4E00-\u9FFF]{2,4}$/;
let checkMailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let checkPhoneRegex = /^09\d{8}$/;

let inputName = document.querySelector(".input-name");
let checkName = document.querySelector(".check-name");

let inputPhone = document.querySelector(".input-phone");
let checkPhone = document.querySelector(".check-phone");

let inputMail = document.querySelector(".input-mail");
let checkMail = document.querySelector(".check-mail");

let inputSubmit = document.querySelector(".input-submit");
let submitBtnCheck = 0;

let contactUs = document.querySelector(".contact-us");
let contactUsT = document.querySelector(".contact-us-t");
let formAll = document.querySelector(".form-all");

let formFurniture = document.querySelectorAll(".formFurniture");
let formFurnitureChecked = 0;

let onlyForm = document.querySelector(".only-form");

let topCase = document.querySelector(".top-case");
let underCase = document.querySelector(".under-case");
let underCaseTrueOrFalse = false;

let windowClose = document.querySelector(".window");
let faXmark = document.querySelector(".fa-xmark");
let windowText = document.querySelector(".window-text");

let bannerTxt = document.querySelector(".banner-txt");
let bannerTxtArr = ["C", "o", "n", "t", "a", "c", "t", "U", "s"];
let bannerTxtNum = 0;

let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let minuteNum = 20;
let secondNum = 12;

let inputAll = [inputName, inputPhone, inputMail];
let checkAll = [checkName, checkPhone, checkMail];
let RegexAll = [checkNameRegex, checkPhoneRegex, checkMailRegex];
// 姓名 手機 信箱正則
for (let i = 0; i < inputAll.length; i++) {
  inputAll[i].addEventListener("input", function () {
    if (!RegexAll[i].test(inputAll[i].value)) {
      inputAll[i].style.border = "red 1px solid";
      checkAll[i].style.display = "block";
    } else {
      inputAll[i].style.border = "black 1px solid";
      checkAll[i].style.display = "none";
      submitBtnCheck++;
    }
  });
}
// 驗證radio按鈕是否有按 以及資料都是否填寫
inputSubmit.addEventListener("click", function () {
  for (let i = 0; i < formFurniture.length; i++) {
    if (formFurniture[i].checked) {
      formFurnitureChecked = 1;
      break;
    }
  }
  if (submitBtnCheck < 3 || formFurnitureChecked == 0) {
    windowText.innerHTML = "有資料尚未填寫正確唷";
    windowClose.style.display = "block";
  } else {
    windowText.innerHTML = "成功送出!!";
    windowClose.style.display = "block";
    for (let i = 0; i < inputAll.length; i++) {
      inputAll[i].value = "";
    }
    for (let i = 0; i < formFurniture.length; i++) {
      formFurniture[i].checked = false;
    }
  }
});

faXmark.addEventListener("click", function () {
  windowClose.style.display = "none";
});
// contactUs.addEventListener("mouseover", function () {
//   setTimeout(() => {
//     formAll.style.borderRight = " 1px solid #000";
//     formAll.style.borderLeft = " 1px solid #000";
//   }, 500);
// });

topCase.addEventListener("click", function () {
  underCaseTrueOrFalse = !underCaseTrueOrFalse;
  if (underCaseTrueOrFalse) {
    underCase.style.display = "flex";
  } else {
    underCase.style.display = "none";
  }
});
onlyForm.addEventListener("submit", function (e) {
  e.preventDefault;
});

window.addEventListener("load", function () {
  setInterval(() => {
    if (bannerTxtNum < bannerTxtArr.length) {
      bannerTxt.innerHTML += bannerTxtArr[bannerTxtNum];
      bannerTxtNum++;
    }
  }, 300);
});

setInterval(() => {
  secondNum++;
  if (secondNum >= 60) {
    secondNum = 0;
    minuteNum++;
    minute.innerHTML = minuteNum;
  }
  if (secondNum < 10) {
    second.innerHTML = `0${secondNum}`;
  } else {
    second.innerHTML = secondNum;
  }
}, 1000);
