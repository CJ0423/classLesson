let headerControlWidth = document.querySelector(".header-control-width");
let weatherApi = document.querySelector(".weather-api");
let topCase = document.querySelector(".top-case");
let underCaseTrueOrFalse = false;
let underCase = document.querySelector(".under-case");
let bannerPic = document.querySelector(".banner-pic");
let bannerPicAll = [
  "../../furniture_img/banner1.jpg",
  "../../furniture_img/banner2.jpg",
  "../../furniture_img/banner3.jpg",
  "../../furniture_img/banner4.jpg",
];
let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % bannerPicAll.length;

  bannerPic.style.opacity = 0;

  setTimeout(() => {
    bannerPic.src = bannerPicAll[currentIndex];

    bannerPic.style.opacity = 1;
  }, 1200);
}, 5000);

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
    temperature =
      myJson.records.location[13].weatherElement[4].time[0].parameter
        .parameterName;
    //降雨機率 %數
    console.log(
      myJson.records.location[13].weatherElement[1].time[0].parameter
        .parameterName
    );
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
