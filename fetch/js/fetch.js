
let x= fetch( "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195")
.then(function(response) {
    console.log(response) 
    // status: 200  表示有取得資料也可以想成成功，但是取得了這些資料後，我們要如何運用呢
return response.json();
}).then(function(myJson){
console.log(myJson)
console.log(myJson.records.location[0].weatherElement[0].elementName)
console.log(myJson.records.location[0].weatherElement[0].time[0].parameter.parameterName)
console.log(myJson.records.location[0].locationName)
})

console.log(x) //我向你保證我會去取得資料！ 取得的資料然後呢？


// https://opendata.cwb.gov.tw/dataset/forecast/F-C0032-001