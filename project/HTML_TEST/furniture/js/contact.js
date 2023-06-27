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
let formAll = document.querySelector(".form-all");

let formFurniture = document.querySelectorAll(".formFurniture");
let formFurnitureChecked = 0;

let topCase = document.querySelector(".top-case");
let underCase = document.querySelector(".under-case");
let underCaseTrueOrFalse = false;

let inputAll = [inputName, inputPhone, inputMail];
let checkAll = [checkName, checkPhone, checkMail];
let RegexAll = [checkNameRegex, checkPhoneRegex, checkMailRegex];
//姓名 手機 信箱正則
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
//驗證radio按鈕是否有按 以及資料都是否填寫
inputSubmit.addEventListener("click", function () {
  for (let i = 0; i < formFurniture.length; i++) {
    if (formFurniture[i].checked) {
      formFurnitureChecked = 1;
      break;
    }
  }
  if (submitBtnCheck < 3 || formFurnitureChecked == 0) {
    alert("有資料尚未填寫正確");
  } else {
    alert("成功送出!!");
  }
});

contactUs.addEventListener("mouseover", function () {
  setTimeout(() => {
    formAll.style.borderRight = " 1px solid #000";
    formAll.style.borderLeft = " 1px solid #000";
  }, 500);
});

topCase.addEventListener("click", function () {
  underCaseTrueOrFalse = !underCaseTrueOrFalse;
  if (underCaseTrueOrFalse) {
    underCase.style.display = "flex";
  } else {
    underCase.style.display = "none";
  }
});
