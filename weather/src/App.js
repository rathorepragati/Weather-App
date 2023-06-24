import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

const apiKey ="b0b3d9deba2984b18172347094768a7d"
const [inputCity,setInputCity]= useState("")
const [data,setData] = useState({})



const getWeatherDetails = (cityName) =>{
  if(!cityName) return
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&appid=" +apiKey
  axios.get(apiUrl).then((res)=>{
console.log("response",res.data);

setData(res.data)
  }).catch((err)=>{
    console.log("error",err);
  })
}

const handleChangeInput = (e) =>{
  console.log("value",e.target.value);
setInputCity(e.target.value)
}

const handleSearch = () =>{
  getWeatherDetails(inputCity)
}



  return (
 <div className="col-md-12">
 
  <div className="weatherbg">
    <h1 className="heading">Weather App</h1>

<div className="d-grid gap-3 col-4 mt-4">

<input type="text" className="form-control" onChange={handleChangeInput} value={inputCity}/>
<button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>

</div>
{Object.keys(data).length > 0 &&
<div className="col-md-12 text-center mt-5">

<div className="shadow rounded weatherResultBox">
<img className="weatherIcon"
 src="https://www.citypng.com/public/uploads/preview/hd-orange-storage-host-clouds-icon-png-31631696263tccmsna0eg.png?v=2023061704"/>

 <h5 className="weatherCity">{data?.name}</h5>
 <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
</div>

</div>
}

</div>

 </div>
  );
}

export default App;
