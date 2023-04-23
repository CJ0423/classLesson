const xhr = new XMLHttpRequest(); // 創建一個新的XMLHttpRequest對象
const url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195'; // API的URL

console.log(xhr)
xhr.onreadystatechange = function() { // 監聽XMLHttpRequest的狀態改變事件 有一點像是我們今天在讀取資料的過程，
    if(xhr.readyState === 0){console.log("創建完成")}
    if(xhr.readyState === 1){console.log("open方法啟動，但是尚未使用send方法")}
    if(xhr.readyState === 2){console.log("send方法啟動，但是尚未收到完整的回應")
   }
    if(xhr.readyState === 3){console.log("已經有收到一些資訊了，但是尚未收到完整的回應")}
  if (xhr.readyState === 4 && xhr.status === 200) { // 如果狀態為4（已經接收到完整的回應）且狀態碼為200（成功）另一個最常看見的是404表示資料找不到

    const response = JSON.parse(xhr.responseText); // 將回應的內容解析為JSON格式
    // console.log(response); // 在控制台中顯示回應的內容
    // console.log(response.records)
    // console.log(response.records.datasetDescription)


    // 這邊是如何取得新北市的方法
    console.log(response.records.location[1].locationName
      );
    console.log(response.records.location[1].weatherElement[0].time[0].parameter.parameterName);









    //  console.log(response.records.location[0].weatherElement[0].elementName); // 在控制台中顯示回應中的某些字段
    // console.log(response.records.location[0].weatherElement[0].time[0].parameter.parameterName);
    //  console.log(response.records.location[0].locationName);
  }
};

xhr.open('GET', url, true); // 設置XMLHttpRequest的請求方式、API的URL和是否使用非同步模式
xhr.send(); // 發送XMLHttpRequest請求
window.addEventListener("click",()=>{
  console.log(this)
})

// console.log(response.records.location[1].weatherElement[0].time[0].parameter.parameterName);