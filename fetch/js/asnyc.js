async function fetchData() {
    try {
      const response = await fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195');
      const data = await response.json();
      console.log(data);
      console.log(data.records.location[0].weatherElement[0].elementName);
      console.log(data.records.location[0].weatherElement[0].time[0].parameter.parameterName);
      console.log(data.records.location[0].locationName);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();


  
  