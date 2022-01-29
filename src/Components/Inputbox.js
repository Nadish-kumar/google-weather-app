import React from 'react';
import {Input ,Button } from '@material-ui/core'
import './Inputbox.css'

const Inputbox = ({input,setinput,findweather}) => {

const functioncall = (event) =>{
 event.preventDefault();
 findweather();
}

  return <div>
      <div className='input'>
          <div className='input__fields'>
              <h1>Google Weather App</h1>
              <p>Powered by</p>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png' alt='logo'></img>
              <form>
                  <Input placeholder='Enter the city Nmae' onChange={(e) => setinput(e.target.value)} value={input}></Input>
                  <br></br>
                  <Button variant="contained" color="secondary" type='submit' onClick={functioncall}>Submit</Button>
              </form>
          </div>
      </div>
  </div>;
};

export default Inputbox;
