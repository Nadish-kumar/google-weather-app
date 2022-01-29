import { Button } from '@material-ui/core';
import React from 'react';
import './Result.css'

const Result = ({temp,image,desc,settemp}) => {
  return <div className='result'>
       <div className="result__box">
           <h1>temp : {temp} °C </h1>
           <p>{desc}</p>
           <img src={image} alt='icon'></img>
           <br />
           <Button variant="contained" color="default" onClick={() => settemp('')}>Back</Button>
       </div>
  </div>;
};

export default Result;
