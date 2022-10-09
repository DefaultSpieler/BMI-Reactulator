import React, {useState} from 'react';
import "./App.css";

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [status, setStatus] = useState("");

  const onSetWeight = e => {
    const value = e.target.value;
    setWeight(value);
  }

  const onSetHeight = e => {
    const value = e.target.value;
    setHeight(value);
  }

  const calculate = ()=>{
    const heightt = height * height;
    const result = weight / heightt;

    setBMI(result.toFixed(2));

    let bmiStatus = 'Obese';

    if (result < 18.5) {
      bmiStatus = 'Underweight';
    } else if (result >= 18.5 && result <= 24.9){
      bmiStatus = 'Healthy';
    } else if (result >= 25 && result <= 29.9){
      bmiStatus = 'Overweight';
    } else {
      bmiStatus = 'Obese';
    }

    setStatus(bmiStatus)
   }
  return (
    <div className="App">
      <h1>BMI CALCULATOR</h1>
      <div>
      <label>Enter Weight : (kg) </label>
      <input value = {weight} onChange={onSetWeight}></input>
      </div>
      <br></br>
      <div>
      <label>Enter Height : (m) </label>
      <input value = {height} onChange={onSetHeight}></input>
      </div>
      <br></br>
      <div >
      <button className='button' onClick={calculate}>Click me </button>
      </div>
      
      <p>Your BMI is : {bmi}</p>
      <p>You are {status}</p>

      
    </div>
  );
}

export default App;
