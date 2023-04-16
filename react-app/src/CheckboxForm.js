import React from 'react';
import './CheckboxForm.css';

function CheckboxForm(){
  const options = ['Remove null Attributes', 'Cloud of Words', 'Language Distribution', 'Data Distribution', 'Stance Distribution', 'Localisation Distribution'];

  return(
    <div className="form-container">
      <form>
        <label className="form-label"htmlFor="name">Title:</label>
        <input className="form-input" type="text" id="name" name="name"/>


        {options.map((option, index) => (
          <label key={index} className="checkbox-label" id={`checkbox-label-${index+1}`}>
            <input type="checkbox" name={`option${index+1}`}/> {option}
          </label>
        ))}


        <div className="submit-button-wrapper">
          <button className="submit-button" type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default CheckboxForm;