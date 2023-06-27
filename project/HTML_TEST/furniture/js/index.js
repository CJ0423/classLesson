let headerControlWidth = document.querySelector(".header-control-width");
let weatherApi = document.querySelector(".weather-api");
let temperature = "";
let rain = "";
let city = "";
let sunMax = "溫度已超過30度，要注意防曬唷!!";
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
window.addEventListener("scroll", function () {
  headerControlWidth.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
});
