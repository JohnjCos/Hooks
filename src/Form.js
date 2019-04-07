import React, { useState } from 'react';
import './Form.css';

export default function Form() {
  const [calories, setCalories] = useState(0);

  let calorieInput;
  let calorieInt;
  function convertCalories(calorieString) {
    calorieInt = parseInt(calorieString);
  }

  return (
    <div>
      <p>You've had {calories} calories for today</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          convertCalories(calorieInput.value);
          setCalories(calories + calorieInt);
          calorieInput.value = '';
        }}
      >
        <input
          type='text'
          placeholder='enter Calories here'
          ref={amount => (calorieInput = amount)}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
