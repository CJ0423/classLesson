function getDom(dom) {
    return document.querySelector(dom);
}

let mainAll = getDom(".main-all");
let taiwanCitys = ["基隆市", "台北市", "新北市", "桃園市", "新竹市",
    "新竹縣", "苗栗縣", "台中市", "彰化縣",
    "南投縣", "雲林縣", "嘉義市", "嘉義縣",
    "台南市", "高雄市", "屏東縣", "宜蘭縣",
    "花蓮縣", "台東縣", "澎湖縣", "金門縣",
    "連江縣"
]

for (let i = 0; i < 21; i++) {
    let x = document.createElement("div");
    x.classList.add("city-all")
    let aa = document.createElement("img");
    aa.classList.add("img-pic")
    aa.src = "./DzQWNg0njr.jpg";
    let bb = document.createElement("div");
    bb.classList.add("rain")
    bb.innerHTML = "降雨機率30%"
    let cc = document.createElement("div");
    cc.classList.add("city-name")
    cc.innerHTML = taiwanCitys[i]
    let dd = document.createElement("div");
    dd.classList.add("temperature");
    dd.innerHTML = "30度"
    x.appendChild(aa)
    x.appendChild(cc)
    x.appendChild(bb)
    x.appendChild(dd)
    mainAll.appendChild(x)
}

let rain = document.querySelectorAll(".rain");
let cityName = document.querySelectorAll(".city-name");
let temperature = document.querySelectorAll(".temperature");
let imgPic = document.querySelectorAll(".img-pic");
let title = document.querySelector(".title");

let rainning = "./—Pngtree—mbe weather thunderstorm commercial elements_4047696.png"
let clown = "./Cloud free icons designed by iconixar.png"
let sun = "./—Pngtree—mbe weather icon sunny_4048669.png"

let temp = [];
fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195")
    .then(function (response) {
        return response.json();
    }).then(function (myJson) {
        console.log(myJson.records.location);
        console.log(myJson.records.location[0].weatherElement[0].time[0].startTime);
        console.log(myJson.records.location[0].weatherElement[0].time[0].endTime);
        console.log(myJson.records.location[0].weatherElement[4].time[0].parameter.parameterName);
        console.log(myJson.records.location[0].locationName);
        console.log(myJson.records.location[0].weatherElement[1].time[0].parameter.parameterName);

        for (let i = 0; i < 22; i++) {
            cityName[i].innerHTML = myJson.records.location[i].locationName
            rain[i].innerHTML = `降雨機率${myJson.records.location[i].weatherElement[1].time[0].parameter.parameterName}%`
            if (parseInt(myJson.records.location[i].weatherElement[1].time[0].parameter.parameterName) <= 30) {
                imgPic[i].src = sun;
            } else if (parseInt(myJson.records.location[i].weatherElement[1].time[0].parameter.parameterName) > 30 && parseInt(myJson.records.location[i].weatherElement[1].time[0].parameter.parameterName) <= 70) {
                imgPic[i].src = clown;
            } else {
                imgPic[i].src = rainning;
            }
            temp.push(myJson.records.location[i].weatherElement[4].time[0].parameter.parameterName)
            temperature[i].innerHTML = "最高溫度" + myJson.records.location[i].weatherElement[4].time[0].parameter.parameterName + "度"
        }
        for (let i = 0; i < temperature.length - 1; i++) {
            if (temp[i] > 25) {
                temperature[i].style.color = "red";
            }
        }

        title.innerHTML = `${myJson.records.location[0].weatherElement[0].time[0].startTime}~${myJson.records.location[0].weatherElement[0].time[0].endTime}
        &copy;`
    });





// let x=0


// fetch( "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195")
// .then(function(response) {
//     console.log(response)
//     // status: 200  表示有取得資料也可以想成成功，但是取得了這些資料後，我們要如何運用呢
// return response.json();
// }).then(function(myJson){
// console.log(myJson)
// console.log(myJson.records.location[0].weatherElement[0].elementName)
// console.log(myJson.records.location[0].weatherElement[0].time[0].parameter.parameterName)
// console.log(myJson.records.location[0].locationName)
// x=myJson.records.location[0].locationName
// }).then(function(){
//     console.log(x)
// })