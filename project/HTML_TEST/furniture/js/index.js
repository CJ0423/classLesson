let headerControlWidth = document.querySelector(".header-control-width");
let weatherApi = document.querySelector(".weather-api");
let topCase = document.querySelector(".top-case");
let underCaseTrueOrFalse = false;
let underCase = document.querySelector(".under-case");
let bannerPic = document.querySelector(".banner-pic");
let postsAll = document.querySelector(".posts-all");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
let main = document.querySelector("main");

let newsBottom = document.querySelector(".news-bottom");
let hamburgerNews = document.querySelector(".hamburger-news");
let newsTrueFalse = false;
let mapHamburger = document.querySelector(".map-hamburger");
let mapTrueFalse = false;
let iframe = document.querySelector("iframe");
let trafficInformationText = document.querySelector(
  ".traffic-information-text"
);
let contactUs = document.querySelector(".contact-us");
let allTrafficInformation = document.querySelector(".all-traffic-information");
let forChangeToBlack = document.querySelectorAll(".forChangeToBlack");
let designLinksAll = document.querySelector(".design-links-all");
let designBtn = document.querySelector(".design-btn");
let designTrueFalse = false;
let messageClose = document.querySelector(".messageClose");
let fakeMessage = document.querySelector(".fake-message");
let messageTrueFalse = false;
let peopleSaying = document.querySelector(".people-saying");
let peopleInput = document.querySelector(".people-input");
let submitBtn = document.querySelector(".submitBtn");
let maxT = document.querySelector(".maxT");
let isRainning = document.querySelector(".isRainning");
let countToHundred = document.querySelector(".count-to-hundred");
let countToHundredNum = 1;
let footerWidthControl = document.querySelector(".footer-width-control");

let bannerPicAll = [
  "../../furniture_img/banner1.jpg",
  "../../furniture_img/banner2.jpg",
  "../../furniture_img/banner3.jpg",
  "../../furniture_img/banner4.jpg",
];
let currentIndex = 0;
let faMessage = document.querySelector(".fa-message");
setInterval(() => {
  currentIndex = (currentIndex + 1) % bannerPicAll.length;

  bannerPic.style.opacity = 0;

  setTimeout(() => {
    bannerPic.src = bannerPicAll[currentIndex];

    bannerPic.style.opacity = 1;
  }, 1200);
}, 3500);

fetch(
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson.records.location);
    //最高氣溫
    console.log(
      myJson.records.location[13].weatherElement[4].time[0].parameter
        .parameterName
    );
    maxT.textContent = `今日氣溫:${myJson.records.location[13].weatherElement[4].time[0].parameter.parameterName}度`;
    temperature =
      myJson.records.location[13].weatherElement[4].time[0].parameter
        .parameterName;
    //降雨機率 %數
    console.log(
      myJson.records.location[13].weatherElement[1].time[0].parameter
        .parameterName
    );

    isRainning.textContent = `降雨機率:${myJson.records.location[13].weatherElement[1].time[0].parameter.parameterName}%`;
    rain =
      myJson.records.location[13].weatherElement[1].time[0].parameter
        .parameterName;
    //桃園市
    console.log(myJson.records.location[13].locationName);
    city = myJson.records.location[13].locationName;
    weatherApi.innerHTML = `<div>今日最高氣溫為${temperature}度</div>`;
  });
// window.addEventListener("scroll", function () {
//   headerControlWidth.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
// });
topCase.addEventListener("click", function () {
  underCaseTrueOrFalse = !underCaseTrueOrFalse;
  if (underCaseTrueOrFalse) {
    underCase.style.display = "flex";
  } else {
    underCase.style.display = "none";
  }
});
postsAll.addEventListener("mouseover", function () {
  headerControlWidth.style.background = "rgba(0, 0, 0, 0.5)";
});
// header.addEventListener("mouseover", function () {
//   headerControlWidth.style.background = "rgba(0, 0, 0, 0)";
// });
hamburgerNews.addEventListener("click", function () {
  newsTrueFalse = !newsTrueFalse;
  // alert(newsTrueFalse);
  if (newsTrueFalse) {
    newsBottom.style.display = "flex";
  } else {
    newsBottom.style.display = "none";
  }
});

mapHamburger.addEventListener("click", function () {
  mapTrueFalse = !mapTrueFalse;
  if (mapTrueFalse) {
    iframe.style.display = "block";
    trafficInformationText.style.display = "flex";
    contactUs.style.display = "flex";
    // allTrafficInformation.style.background =
    //   "linear-gradient(179deg, rgb(49, 48, 48), rgb(255, 255, 255))";
    for (let i = 0; i < forChangeToBlack.length; i++) {
      forChangeToBlack[i].style.borderBottom = "1px white solid";
    }
  } else {
    iframe.style.display = "none";
    trafficInformationText.style.display = "none";
    contactUs.style.display = "none";
    allTrafficInformation.style.background = "rgb(49, 48, 48)";
    for (let i = 0; i < forChangeToBlack.length; i++) {
      forChangeToBlack[i].style.borderBottom = "1px white solid";
    }
  }
});
designBtn.addEventListener("click", function () {
  designTrueFalse = !designTrueFalse;
  if (designTrueFalse) {
    designLinksAll.style.display = "flex";
  } else {
    designLinksAll.style.display = "none";
  }
});
messageClose.addEventListener("click", function () {
  messageTrueFalse = !messageTrueFalse;
  if (messageTrueFalse) {
    fakeMessage.style.display = "flex";
  } else {
    fakeMessage.style.display = "none";
  }
});
faMessage.addEventListener("click", function () {
  messageTrueFalse = !messageTrueFalse;
  if (messageTrueFalse) {
    fakeMessage.style.display = "flex";
  } else {
    fakeMessage.style.display = "none";
  }
});
submitBtn.addEventListener("click", function () {
  if (peopleInput.value !== "") {
    const newDiv = document.createElement("div");
    newDiv.textContent = peopleInput.value;
    peopleSaying.appendChild(newDiv);
    peopleInput.value = "";
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    // 按下 Enter 鍵
    e.preventDefault(); // 防止表單提交行為
    if (peopleInput.value !== "") {
      const newDiv = document.createElement("div");
      newDiv.textContent = peopleInput.value;
      peopleSaying.appendChild(newDiv);
      peopleInput.value = "";
    }
  }
});
let signInProgram = document.querySelector(".sign-in-program");
let acc = "CHD106";
let password1 = 123456;
let account = document.querySelector("#account");
let pass = document.querySelector("#pass");
let send = document.querySelector(".send");
let inPageNavigation = document.querySelector(".in-page-navigation");
let signInTimes = 3;
let labelAccount = document.querySelector(".label-account");
let labelPassword = document.querySelector(".label-password");
let threeTimes = document.querySelector(".three-times");
let forGrayBkc = document.querySelector(".for-gray-bkc");

window.addEventListener("load", function () {
  let countToHundredNum = 0; // 設定初始數字為 0

  const incrementNumber = () => {
    countToHundred.innerHTML = `${countToHundredNum}%`;
    countToHundredNum++;

    if (countToHundredNum <= 100) {
      header.style.display = "none";
      main.style.display = "none";
      footerWidthControl.style.display = "none";
      inPageNavigation.style.display = "none";
      setTimeout(incrementNumber, 30); // 延遲 10 毫秒後執行增加數字的函式
    } else if (countToHundredNum >= 100) {
      countToHundred.style.display = "none";
      signInProgram.style.display = "flex";
    }
    // else {
    //   countToHundred.style.display = "none";
    //   header.style.display = "block";
    //   main.style.display = "block";
    //   footerWidthControl.style.display = "flex";
    // }
  };

  incrementNumber(); // 開始執行增加數字的函式

  // 監聽 opacity 的 transitionend 事件
  // countToHundred.addEventListener("transitionend", function () {
  //   if (countToHundred.style.opacity <= "1") {
  //     countToHundred.style.display = "none";
  //   }
  // });
});

send.addEventListener("click", function () {
  if (account.value == acc && pass.value == password1) {
    // countToHundred.style.display = "none";
    signInProgram.style.display = "none";
    header.style.display = "block";
    main.style.display = "block";
    footerWidthControl.style.display = "flex";
    inPageNavigation.style.display = "flex";
  } else if (account.value == "" || pass.value == "") {
    threeTimes.innerHTML = `Account or password cannot be empty`;
    threeTimes.style.color = "red";
    threeTimes.style.animation = "notCorrect 0.1s 0s linear 2 alternate";
    setTimeout(() => {
      threeTimes.style.animation = "none";
    }, 500);
  } else if (account.value !== acc || pass.value !== password1) {
    signInTimes -= 1;
    threeTimes.innerHTML = `
    only ${signInTimes} chances`;
    threeTimes.style.color = "black";
    // alert(`次數剩餘${signInTimes}次`);
  }
  if (signInTimes <= 0) {
    account.disabled = true;
    pass.disabled = true;
    labelAccount.style.color = "gray";
    labelPassword.style.color = "gray";
    send.style.display = "none";
    threeTimes.innerHTML = "登入次數已達上限,此帳戶已遭鎖定";
    threeTimes.style.color = "red";
    forGrayBkc.style.display = "block";
  }
});
