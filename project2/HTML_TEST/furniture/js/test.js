fetch(
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson.records.location);
    //降雨機率 %數
    console.log(
      myJson.records.location[13].weatherElement[1].time[0].parameter
        .parameterName
    );
    //桃園市
    console.log(myJson.records.location[13].locationName);
  });
