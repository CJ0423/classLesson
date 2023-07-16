let faqChinese = document.querySelector(".faq-chinese");
let faqChineseArr = ["常", "見", "問", "題"];
let faqChineseNum = 0;
let faq = document.querySelector(".faq");
let lineShow = document.querySelector(".line-show");
let main1 = document.querySelector(".main1");
// -------------------------------
let question1Drop = document.querySelector(".question1-drop");
let question1Ans = document.querySelector(".question1-ans");
let question1TrueFalse = false;
let question2Drop = document.querySelector(".question2-drop");
let question2Ans = document.querySelector(".question2-ans");
let question2TrueFalse = false;
let question3Drop = document.querySelector(".question3-drop");
let question3Ans = document.querySelector(".question3-ans");
let question3TrueFalse = false;
let question4Drop = document.querySelector(".question4-drop");
let question4Ans = document.querySelector(".question4-ans");
let question4TrueFalse = false;
let question5Drop = document.querySelector(".question5-drop");
let question5Ans = document.querySelector(".question5-ans");
let question5TrueFalse = false;
let question6Drop = document.querySelector(".question6-drop");
let question6Ans = document.querySelector(".question6-ans");
let question6TrueFalse = false;
let question7Drop = document.querySelector(".question7-drop");
let question7Ans = document.querySelector(".question7-ans");
let question7TrueFalse = false;
// -----------------------------------
let send = document.querySelector(".send");
let otherQuestion = document.querySelector(".other-question");
let closeMsg = document.querySelector(".close-msg");
let passMsg = document.querySelector(".pass-msg");
let expect = document.querySelector(".expect");
let letter = document.querySelector(".letter");
let msgTxt = document.querySelector(".msg-txt");
let otherQuestionRun = document.querySelector(".other-question-run");
let otherQuestionRunNum = 0;
let otherQuestionRunArr = [
  "若",
  "有",
  "其",
  "他",
  "問",
  "題",
  "煩",
  "請",
  "輸",
  "入",
];
// -----------------------
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
// -----------------------
window.addEventListener("load", function () {
  setInterval(() => {
    if (faqChineseNum < faqChineseArr.length) {
      faqChinese.innerHTML += faqChineseArr[faqChineseNum];
      faqChineseNum++;
    }
  }, 400);
});

let lastScrollPosition =
  window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", function () {
  let currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition > lastScrollPosition) {
    // 向下滑动
    // alert("向下滑动");
    // 可以在这里编写处理向下滑动的代码
    faq.style.fontSize = "50px";
  } else {
    // 向上滑动
    // alert("向上滑动");
    // 可以在这里编写处理向上滑动的代码
    faq.style.fontSize = "100px";
  }

  // 更新上一次滚动位置
  lastScrollPosition = currentScrollPosition;
});

main1.addEventListener("mouseover", function () {
  lineShow.style.width = "0%";
});
main1.addEventListener("mouseout", function () {
  lineShow.style.width = "100%";
});
// -----------------------------------------
question1Drop.addEventListener("click", function () {
  question1TrueFalse = !question1TrueFalse;
  if (!question1TrueFalse) {
    question1Ans.style.opacity = "0";
    question1Drop.style.borderLeft = "10px transparent solid";
    question1Drop.style.borderRight = "10px transparent solid";
    question1Drop.style.borderBottom = "none";
    question1Drop.style.borderTop = "10px white solid";
    setTimeout(() => {
      question1Ans.style.display = "none";
    }, 100);
  } else {
    question1Drop.style.borderLeft = "10px transparent solid";
    question1Drop.style.borderRight = "10px transparent solid";
    question1Drop.style.borderBottom = "10px white solid";
    question1Drop.style.borderTop = "none";
    question1Ans.style.display = "flex";
    setTimeout(() => {
      question1Ans.style.opacity = "1";
    }, 100);
  }
});
question2Drop.addEventListener("click", function () {
  question2TrueFalse = !question2TrueFalse;
  if (!question2TrueFalse) {
    question2Ans.style.opacity = "0";
    question2Drop.style.borderLeft = "10px transparent solid";
    question2Drop.style.borderRight = "10px transparent solid";
    question2Drop.style.borderBottom = "none";
    question2Drop.style.borderTop = "10px white solid";
    setTimeout(() => {
      question2Ans.style.display = "none";
    }, 100);
  } else {
    question2Drop.style.borderLeft = "10px transparent solid";
    question2Drop.style.borderRight = "10px transparent solid";
    question2Drop.style.borderBottom = "10px white solid";
    question2Drop.style.borderTop = "none";
    question2Ans.style.display = "flex";
    setTimeout(() => {
      question2Ans.style.opacity = "1";
    }, 100);
  }
});
question3Drop.addEventListener("click", function () {
  question3TrueFalse = !question3TrueFalse;
  if (!question3TrueFalse) {
    question3Ans.style.opacity = "0";
    question3Drop.style.borderLeft = "10px transparent solid";
    question3Drop.style.borderRight = "10px transparent solid";
    question3Drop.style.borderBottom = "none";
    question3Drop.style.borderTop = "10px white solid";
    setTimeout(() => {
      question3Ans.style.display = "none";
    }, 100);
  } else {
    question3Drop.style.borderLeft = "10px transparent solid";
    question3Drop.style.borderRight = "10px transparent solid";
    question3Drop.style.borderBottom = "10px white solid";
    question3Drop.style.borderTop = "none";
    question3Ans.style.display = "flex";
    setTimeout(() => {
      question3Ans.style.opacity = "1";
    }, 100);
  }
});
question4Drop.addEventListener("click", function () {
  question4TrueFalse = !question4TrueFalse;
  if (!question4TrueFalse) {
    question4Ans.style.opacity = "0";
    question4Drop.style.borderLeft = "10px transparent solid";
    question4Drop.style.borderRight = "10px transparent solid";
    question4Drop.style.borderBottom = "none";
    question4Drop.style.borderTop = "10px white solid";
    setTimeout(() => {
      question4Ans.style.display = "none";
    }, 100);
  } else {
    question4Drop.style.borderLeft = "10px transparent solid";
    question4Drop.style.borderRight = "10px transparent solid";
    question4Drop.style.borderBottom = "10px white solid";
    question4Drop.style.borderTop = "none";
    question4Ans.style.display = "flex";
    setTimeout(() => {
      question4Ans.style.opacity = "1";
    }, 100);
  }
});
question5Drop.addEventListener("click", function () {
  question5TrueFalse = !question5TrueFalse;
  if (!question5TrueFalse) {
    question5Ans.style.opacity = "0";
    question5Drop.style.borderLeft = "10px transparent solid";
    question5Drop.style.borderRight = "10px transparent solid";
    question5Drop.style.borderBottom = "none";
    question5Drop.style.borderTop = "10px white solid";
    setTimeout(() => {
      question5Ans.style.display = "none";
    }, 100);
  } else {
    question5Drop.style.borderLeft = "10px transparent solid";
    question5Drop.style.borderRight = "10px transparent solid";
    question5Drop.style.borderBottom = "10px white solid";
    question5Drop.style.borderTop = "none";
    question5Ans.style.display = "flex";
    setTimeout(() => {
      question5Ans.style.opacity = "1";
    }, 100);
  }
});
question6Drop.addEventListener("click", function () {
  question6TrueFalse = !question6TrueFalse;
  if (!question6TrueFalse) {
    question6Ans.style.opacity = "0";
    question6Drop.style.borderLeft = "10px transparent solid";
    question6Drop.style.borderRight = "10px transparent solid";
    question6Drop.style.borderBottom = "none";
    question6Drop.style.borderTop = "10px white solid";
    setTimeout(() => {
      question6Ans.style.display = "none";
    }, 100);
  } else {
    question6Drop.style.borderLeft = "10px transparent solid";
    question6Drop.style.borderRight = "10px transparent solid";
    question6Drop.style.borderBottom = "10px white solid";
    question6Drop.style.borderTop = "none";
    question6Ans.style.display = "flex";
    setTimeout(() => {
      question6Ans.style.opacity = "1";
    }, 100);
  }
});
question7Drop.addEventListener("click", function () {
  question7TrueFalse = !question7TrueFalse;
  if (!question7TrueFalse) {
    question7Ans.style.opacity = "0";
    question7Drop.style.borderLeft = "10px transparent solid";
    question7Drop.style.borderRight = "10px transparent solid";
    question7Drop.style.borderBottom = "none";
    question7Drop.style.borderTop = "10px white solid";
    setTimeout(() => {
      question7Ans.style.display = "none";
    }, 100);
  } else {
    question7Drop.style.borderLeft = "10px transparent solid";
    question7Drop.style.borderRight = "10px transparent solid";
    question7Drop.style.borderBottom = "10px white solid";
    question7Drop.style.borderTop = "none";
    question7Ans.style.display = "flex";
    setTimeout(() => {
      question7Ans.style.opacity = "1";
    }, 100);
  }
});
// -----------------------------------------
send.addEventListener("click", function () {
  if (!otherQuestion.value.trim() == "") {
    otherQuestion.value = "";
    otherQuestion.style.width = "0";

    setTimeout(() => {
      otherQuestion.style.transform = "translateY(-150px)";
    }, 300);
    setTimeout(() => {
      otherQuestion.style.opacity = "0";
    }, 600);
    setTimeout(() => {
      passMsg.style.display = "flex";
    }, 1200);
  } else {
    alert("內容不可為空");
  }
});

closeMsg.addEventListener("click", function () {
  expect.style.display = "none";
  letter.style.display = "flex";
  passMsg.style.transform = "translateX(-60%) translateY(-50%)";
  setTimeout(() => {
    passMsg.style.transform = "translateX(1500px) translateY(-50%)";
    otherQuestion.style.width = "50%";
    otherQuestion.style.opacity = "1";
    otherQuestion.style.transform = "translateY(0px)";
  }, 500);
  setTimeout(() => {
    passMsg.style.display = "none";
    expect.style.display = "flex";
    letter.style.display = "none";
    passMsg.style.transform = "translateX(-50%) translateY(-50%)";
  }, 800);
});

setInterval(() => {
  if (otherQuestionRunNum < otherQuestionRunArr.length) {
    otherQuestionRun.innerHTML += otherQuestionRunArr[otherQuestionRunNum];
  } else if (otherQuestionRunNum >= otherQuestionRunArr.length) {
    otherQuestionRun.innerHTML = '<span class="dot">.</span>';
    otherQuestionRunNum = -1;
  }
  otherQuestionRunNum++;
}, 600);
