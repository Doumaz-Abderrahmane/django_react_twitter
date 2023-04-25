import React from "react";

function CheckboxForm() {
  const options = ['a', 'b', 'a', 'b', 'a', 'b', 'a']
  const handelSubmit = async (event) => {
    event.preventDefault();
    console.log("React hates us");
  }
  return (
    <div className="form-container">
      <form onSubmit={handelSubmit}>
        <label className="form-label" htmlFor="name">Title:</label> 
        <input className="form-input" type="text" id="name" name="name" /> 

        {options.map((option, index) => ( 
          <label key={index} className="checkbox-label" id={`checkbox-label-${index + 1}`}> 
            <input type="checkbox" name={`option${index + 1}`} /> {option} 
          </label> 
        ))} 

        <div className="submit-button-wrapper"> 
          <button className="submit-button" type="submit">Submit</button> 
        </div> 
      </form>
    </div>
  )
 }

export default CheckboxForm();