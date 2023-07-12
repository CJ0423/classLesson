let faqChinese = document.querySelector(".faq-chinese");
let faqChineseArr = ["常", "見", "問", "題"];
let faqChineseNum = 0;
let faq = document.querySelector(".faq");
let lineShow = document.querySelector(".line-show");
let main1 = document.querySelector(".main1");

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
