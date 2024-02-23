import { getMonths } from "./constants";
import axios from "axios";
export const generateGraphData =(data)=>{
    let curveData = [];
    let early = "";
    let warning = "";
    let harvest = "";
    for(let i=0;i<data.length;i++){
        if(data[i].feature_category === "growth_stage_prediction"){
            let state = data[i]?.features[2]?.value;
            let date =  data[i]?.features[5]?.value
            let month = getMonths[Number(date?.slice(5,7)) -1]?.slice(0,3)
            let day = date.slice(8,10)
            curveData.push(
                {
                    x:month+" "+day,
                    y:state,
                    state:data[i]?.features[0]?.value.slice(0,3),
                }
            )
        }
        if(data[i].feature_category === "bydv_risk"){
            let date1 = data[i].features[0].value;
            let date2 = data[i].features[1].value;
            early = date1.slice(8,10) + " " +  getMonths[Number(date1.slice(5,7))-1] + " " + date1.slice(0,4);
            warning = date2.slice(8,10) + " " +  getMonths[Number(date2.slice(5,7)-1)] + " " + date2.slice(0,4);
        }
        if(data[i].feature_category === "best_harvest"){
            let date1 = data[i].features[0].value;
            harvest = getMonths[Number(date1.slice(5,7))-1] + " " + date1.slice(8,10);
        }
    }
    return {curveData:curveData, early:early, warning:warning, harvest:harvest}
}
export const apiCall = (data, setData)=>{
    let dataRes = []
    axios.post('http://0.0.0.0:5000/predictions', data)
      .then(response => {
        dataRes = response?.data?.results[0]?.predictions
        console.log(dataRes)
        setData(dataRes)
        return dataRes
      })
      .catch(error => {
        console.error(error);
      });
    return dataRes
}