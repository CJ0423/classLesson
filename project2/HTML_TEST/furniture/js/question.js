let topCase = document.querySelector(".top-case");
let underCaseTrueOrFalse = false;
let underCase = document.querySelector(".under-case");
let titleChinese = document.querySelector(".title-chinese");
let titleChineseArr = ["計劃", "策畫", "規劃"];
let bannerPic = document.querySelector(".banner-pic");
let bannerBackgroundPic = [
  "../../furniture_img/question3.jpg",
  "../../furniture_img/question3.jpg",
  "../../furniture_img/question4.jpg",
];
let welcomeFirst = document.querySelector(".welcome-first");

let welcomeArr = ["W", "e", "l", "c", "o", "m", "e"];
let welcomeArr2 = ["t", "o"];
let welcomeArr3 = ["H", "U", "f", "u", "r", "n", "i", "t", "u", "r", "e"];
let welcomeNum = 0;
window.addEventListener("load", function () {
  runAnimation();

  function runAnimation() {
    animateArray(welcomeArr, welcomeFirst, function () {
      animateArray(welcomeArr2, welcomeFirst, function () {
        animateArray(welcomeArr3, welcomeFirst, runAnimation);
      });
    });
  }

  function animateArray(array, element, callback) {
    let i = 0;
    const interval = setInterval(function () {
      if (i < array.length) {
        element.innerHTML += array[i];
        i++;
      } else {
        clearInterval(interval);
        element.innerHTML = '<span class="dot">.</span>';
        callback();
      }
    }, 300);
  }
});
let titleNum = 0;
let questionFurniture = document.querySelector(".question-furniture");
let questionSpace = document.querySelector(".question-space");
let xMark = document.querySelector(".x-mark");
let showResult = document.querySelector(".show-result");
let score = document.querySelector(".score");
let questionTrueFalse = false;
// ------切換問卷
let paper1 = document.querySelector(".paper1");
let paper2 = document.querySelector(".paper2");

// -------------PAPER1
let allRadio = document.querySelectorAll(".all-radio");
let question1Op1 = document.querySelector("#question1-op1");
let question1Op2 = document.querySelector("#question1-op2");
let question1Op3 = document.querySelector("#question1-op3");
let question2Op1 = document.querySelector("#question2-op1");
let question2Op2 = document.querySelector("#question2-op2");
let question2Op3 = document.querySelector("#question2-op3");
let question3Op1 = document.querySelector("#question3-op1");
let question3Op2 = document.querySelector("#question3-op2");
let question3Op3 = document.querySelector("#question3-op3");
let question4Op1 = document.querySelector("#question4-op1");
let question4Op2 = document.querySelector("#question4-op2");
let question4Op3 = document.querySelector("#question4-op3");
let paperScore1 = 0;
let questionPaperOneAll1 = [
  question1Op1,
  question2Op1,
  question3Op1,
  question4Op1,
];
let questionPaperOneAll2 = [
  question1Op2,
  question2Op2,
  question3Op2,
  question4Op2,
];
let questionPaperOneAll3 = [
  question1Op3,
  question2Op3,
  question3Op3,
  question4Op3,
];
let CheckClickQ1 = [question1Op1, question1Op2, question1Op3];
let CheckClickQ2 = [question2Op1, question2Op2, question2Op3];
let CheckClickQ3 = [question3Op1, question3Op2, question3Op3];
let CheckClickQ4 = [question4Op1, question4Op2, question4Op3];
let CheckClickNum = 0;
// PAPER2-----------------------------------------------
let paperScore2 = 0;
let paper2CheckClickNum = 0;
let paper2Question1Op1 = document.querySelector("#paper2-question1-op1");
let paper2Question1Op2 = document.querySelector("#paper2-question1-op2");
let paper2Question1Op3 = document.querySelector("#paper2-question1-op3");
let paper2Question2Op1 = document.querySelector("#paper2-question2-op1");
let paper2Question2Op2 = document.querySelector("#paper2-question2-op2");
let paper2Question2Op3 = document.querySelector("#paper2-question2-op3");
let paper2Question3Op1 = document.querySelector("#paper2-question3-op1");
let paper2Question3Op2 = document.querySelector("#paper2-question3-op2");
let paper2Question3Op3 = document.querySelector("#paper2-question3-op3");
let paper2Question4Op1 = document.querySelector("#paper2-question4-op1");
let paper2Question4Op2 = document.querySelector("#paper2-question4-op2");
let paper2Question4Op3 = document.querySelector("#paper2-question4-op3");
let questionPaperTwoAll1 = [
  paper2Question1Op1,
  paper2Question2Op1,
  paper2Question3Op1,
  paper2Question4Op1,
];
let questionPaperTwoAll2 = [
  paper2Question1Op2,
  paper2Question2Op2,
  paper2Question3Op2,
  paper2Question4Op2,
];
let questionPaperTwoAll3 = [
  paper2Question1Op3,
  paper2Question2Op3,
  paper2Question3Op3,
  paper2Question4Op3,
];
for (let i = 0; i < questionPaperTwoAll1.length; i++) {
  let radio = questionPaperTwoAll1[i];

  radio.addEventListener("change", function () {
    if (this.checked) {
      paperScore2 += 1;
    } else {
      paperScore2 -= 1;
    }
  });
}
for (let i = 0; i < questionPaperTwoAll2.length; i++) {
  let radio = questionPaperTwoAll2[i];

  radio.addEventListener("change", function () {
    if (this.checked) {
      paperScore2 += 3;
    } else {
      paperScore2 -= 3;
    }
  });
}
for (let i = 0; i < questionPaperTwoAll3.length; i++) {
  let radio = questionPaperTwoAll3[i];

  radio.addEventListener("change", function () {
    if (this.checked) {
      paperScore2 += 5;
    } else {
      paperScore2 -= 5;
    }
  });
}
let paper2CheckClickQ1 = [
  paper2Question1Op1,
  paper2Question1Op2,
  paper2Question1Op3,
];
let paper2CheckClickQ2 = [
  paper2Question2Op1,
  paper2Question2Op2,
  paper2Question2Op3,
];
let paper2CheckClickQ3 = [
  paper2Question3Op1,
  paper2Question3Op2,
  paper2Question3Op3,
];
let paper2CheckClickQ4 = [
  paper2Question4Op1,
  paper2Question4Op2,
  paper2Question4Op3,
];
let paper2SendBtn = document.querySelector(".paper2-sendBtn");
paper2SendBtn.addEventListener("click", function () {
  for (let i = 0; i < paper2CheckClickQ1.length; i++) {
    if (paper2CheckClickQ1[i].checked) {
      paper2CheckClickNum += 1;

      break;
    }
  }
  for (let i = 0; i < paper2CheckClickQ2.length; i++) {
    if (paper2CheckClickQ2[i].checked) {
      paper2CheckClickNum += 1;

      break;
    }
  }
  for (let i = 0; i < paper2CheckClickQ3.length; i++) {
    if (paper2CheckClickQ3[i].checked) {
      paper2CheckClickNum += 1;

      break;
    }
  }
  for (let i = 0; i < paper2CheckClickQ4.length; i++) {
    if (paper2CheckClickQ4[i].checked) {
      paper2CheckClickNum += 1;

      break;
    }
  }
  if (paper2CheckClickNum == 4 || paper2CheckClickNum == 6) {
    if (paperScore2 <= 8) {
      score.innerHTML = `總共獲得${paperScore2}分哦!!<div>您的美感程度偏低唷</div>`;
      showResult.style.display = "flex";
    } else if (paperScore2 > 8 && paperScore2 <= 16) {
      score.innerHTML = `總共獲得${paperScore2}分哦!!<div>您的美感程度屬於中間唷</div>`;
      showResult.style.display = "flex";
    } else if (paperScore2 > 16) {
      score.innerHTML = `總共獲得${paperScore2}分哦!!<div>您的美感程度屬於非常厲害!</div>`;
      showResult.style.display = "flex";
    }
  } else {
    // alert(paper2CheckClickNum);
    score.innerHTML = `有問題尚未填寫完成哦!!`;
    showResult.style.display = "flex";
  }
});
// --------------------------------------------------
for (let i = 0; i < questionPaperOneAll1.length; i++) {
  let radio = questionPaperOneAll1[i];

  radio.addEventListener("change", function () {
    if (this.checked) {
      paperScore1 += 1;
    } else {
      paperScore1 -= 1;
    }
  });
}

for (let i = 0; i < questionPaperOneAll2.length; i++) {
  let radio = questionPaperOneAll2[i];

  radio.addEventListener("change", function () {
    if (this.checked) {
      paperScore1 += 3;
    } else {
      paperScore1 -= 3;
    }
  });
}
for (let i = 0; i < questionPaperOneAll3.length; i++) {
  let radio = questionPaperOneAll3[i];

  radio.addEventListener("change", function () {
    if (this.checked) {
      paperScore1 += 5;
    } else {
      paperScore1 -= 5;
    }
  });
}
// let sendBtn = document.querySelector(".sendBtn");
// sendBtn.addEventListener("click", function () {
//   for (let i = 0; i < questionPaperOneAll.length; i++) {
//     let radio = questionPaperOneAll[i];
//     radio.addEventListener("change", function () {
//       if (this.checked) {
//         paperScore1 += 5;
//       } else {
//         paperScore1 -= 5;
//       }
//     });
//   }
//   alert(`共獲得${paperScore1}分`);
// });
let sendBtn = document.querySelector(".sendBtn");
sendBtn.addEventListener("click", function () {
  for (let i = 0; i < CheckClickQ1.length; i++) {
    if (CheckClickQ1[i].checked) {
      CheckClickNum += 1;
      break;
    }
  }
  for (let i = 0; i < CheckClickQ2.length; i++) {
    if (CheckClickQ2[i].checked) {
      CheckClickNum += 1;
      break;
    }
  }
  for (let i = 0; i < CheckClickQ3.length; i++) {
    if (CheckClickQ3[i].checked) {
      CheckClickNum += 1;
      break;
    }
  }
  for (let i = 0; i < CheckClickQ4.length; i++) {
    if (CheckClickQ4[i].checked) {
      CheckClickNum += 1;
      break;
    }
  }
  if (CheckClickNum == 4 || CheckClickNum == 6) {
    if (paperScore1 <= 8) {
      score.innerHTML = `總共獲得${paperScore1}分哦!!<div>您對家具的喜愛程度偏低唷</div>`;
      showResult.style.display = "flex";
    } else if (paperScore1 > 8 && paperScore1 <= 16) {
      score.innerHTML = `總共獲得${paperScore1}分哦!!<div>您對家具的喜愛程度屬於中間唷</div>`;
      showResult.style.display = "flex";
    } else if (paperScore1 > 16) {
      score.innerHTML = `總共獲得${paperScore1}分哦!!<div>您對家具的喜愛程度屬於非常喜歡!</div>`;
      showResult.style.display = "flex";
    }
    document.getElementById("myForm").reset();
  } else {
    score.innerHTML = `有問題尚未填寫完成哦!!`;
    showResult.style.display = "flex";
  }
});
// ----------------------------------------------
topCase.addEventListener("click", function () {
  underCaseTrueOrFalse = !underCaseTrueOrFalse;
  if (underCaseTrueOrFalse) {
    underCase.style.display = "flex";
  } else {
    underCase.style.display = "none";
  }
});

window.addEventListener("load", function () {
  this.setInterval(() => {
    titleNum++;
    if (titleNum < titleChineseArr.length) {
      bannerPic.style.backgroundImage = `url(${bannerBackgroundPic[titleNum]})`;
    } else {
      titleNum = 0;
      bannerPic.style.backgroundImage = `url(${bannerBackgroundPic[titleNum]})`;
    }
  }, 3000);
});
// bannerBackgroundPic
window.addEventListener("load", function () {
  this.setInterval(() => {
    titleNum++;
    if (titleNum < titleChineseArr.length) {
      titleChinese.innerHTML = titleChineseArr[titleNum];
    } else {
      titleNum = 0;
      titleChinese.innerHTML = titleChineseArr[titleNum];
    }
  }, 3000);
});
questionFurniture.addEventListener("click", function () {
  questionTrueFalse = false;
  if (
    questionFurniture.style.backgroundColor !== "white" &&
    questionTrueFalse == false
  ) {
    questionFurniture.style.backgroundColor = "white";
    questionFurniture.style.color = "rgb(49, 48, 48)";
    questionSpace.style.backgroundColor = "rgb(49, 48, 48)";
    questionSpace.style.color = "white";
    paper2.style.display = "none";
    paper1.style.display = "block";
  }
});

questionSpace.addEventListener("click", function () {
  questionTrueFalse = true;
  if (
    questionSpace.style.backgroundColor !== "white" &&
    questionTrueFalse == true
  ) {
    questionSpace.style.backgroundColor = "white";
    questionSpace.style.color = "rgb(49, 48, 48)";
    questionFurniture.style.backgroundColor = "rgb(49, 48, 48)";
    questionFurniture.style.color = "white";
    paper1.style.display = "none";
    paper2.style.display = "block";
  }
});
// for (let i = 0; i < allRadio.length; i++) {
//   allRadio[i].addEventListener("click", function () {
//     this.style.color = "red";
//   });
// }
xMark.addEventListener("click", function () {
  showResult.style.display = "none";
});

// window.addEventListener("load", function () {
//   this.document
//     .getElementById("btnSend")
//     .addEventListener("click", function () {
//       document.getElementById("myForm").submit();
//     });
// });
