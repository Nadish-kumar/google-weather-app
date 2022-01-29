import React, { useState } from 'react';
import Inputbox from './Components/Inputbox'
import axios from 'axios';
import Result from './Components/Result';

const App = () => {

  const [input, setinput] = useState("");
  const [icon, seticon] = useState("");
  const [desc, setdesc] = useState("");
  const [temp, settemp] = useState("");

  const findweather = async () => {
  const apikeys = "75551a9d8d965f9884be3ea3a0e8da2b";
  const units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+apikeys+"&units="+units;
   let response = await axios.get(url);
   let temp = await response.data.main.temp;
   let weatherdesc = await response.data.weather[0].description;
   let icon = await response.data.weather[0].icon;
   const imageurl = "https://openweathermap.org/img/wn/"+icon+ "@2x.png";
   settemp(temp)
   setdesc(weatherdesc)
   seticon(imageurl)
   setinput("")

  } 


  return <div>
    {temp === "" ? (<Inputbox setinput={setinput} input = {input} findweather ={findweather}/>)
    :
   <Result temp={temp} desc={desc} image={icon} settemp={settemp}  />
}
  </div>;
};

export default App;
