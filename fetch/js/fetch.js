let x=0


fetch( "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195")
.then(function(response) {
    console.log(response) 
    // status: 200  表示有取得資料也可以想成成功，但是取得了這些資料後，我們要如何運用呢
return response.json();
}).then(function(myJson){
console.log(myJson)
console.log(myJson.records.location[0].weatherElement[0].elementName)
console.log(myJson.records.location[0].weatherElement[0].time[0].parameter.parameterName)
console.log(myJson.records.location[0].locationName)
x=myJson.records.location[0].locationName
}).then(function(){
    console.log(x)
})
// console.log(x) //我向你保證我會去取得資料！ 取得的資料然後呢？



// https://opendata.cwb.gov.tw/dataset/forecast/F-C0032-001
// 要隨著氣象預報給的降雨機率 改變天氣圖案。 30%以下用 太陽 30~70%用陰天 70以上就下雨
// 降雨機率
// 每個縣市的名稱
// 氣溫

// 大標題的部分 請幫我抓到 氣象局的36小時的時間
